# 접근성 가이드라인

이 문서는 Daepyro Design System의 접근성(Accessibility, a11y) 가이드라인을 설명합니다.

## 접근성이란?

접근성은 장애를 가진 사용자뿐만 아니라 모든 사용자가 웹사이트와 애플리케이션을 사용할 수 있도록 하는 것입니다. 디자인 시스템의 모든 컴포넌트는 WCAG 2.1 AA 수준의 접근성 기준을 준수해야 합니다.

## 기본 원칙

### 1. 인식 가능 (Perceivable)

- 모든 텍스트는 충분한 대비율을 가져야 합니다 (최소 4.5:1)
- 이미지에는 대체 텍스트(alt text)가 있어야 합니다
- 색상만으로 정보를 전달하지 않아야 합니다

### 2. 작동 가능 (Operable)

- 키보드로 모든 기능을 사용할 수 있어야 합니다
- 충분한 시간을 제공해야 합니다 (애니메이션, 자동 재생 등)
- 발작을 유발할 수 있는 콘텐츠를 피해야 합니다

### 3. 이해 가능 (Understandable)

- 텍스트는 읽기 쉽고 이해하기 쉬워야 합니다
- 페이지는 예측 가능한 방식으로 작동해야 합니다
- 입력 오류를 식별하고 설명해야 합니다

### 4. 견고함 (Robust)

- 보조 기술과 호환되어야 합니다
- 표준 HTML 요소와 ARIA 속성을 올바르게 사용해야 합니다

## 컴포넌트 개발 가이드라인

### 필수 ARIA 속성

#### 버튼 (Button)

```tsx
// ✅ 좋은 예
<button 
  aria-label="닫기" 
  onClick={handleClose}
>
  <CloseIcon />
</button>

// ❌ 나쁜 예
<div onClick={handleClose}>
  <CloseIcon />
</div>
```

#### 폼 입력 (Form Input)

```tsx
// ✅ 좋은 예
<label htmlFor="email">이메일</label>
<input 
  id="email"
  type="email"
  aria-required="true"
  aria-invalid={hasError}
  aria-describedby={hasError ? "email-error" : undefined}
/>
{hasError && (
  <div id="email-error" role="alert">
    올바른 이메일 형식이 아닙니다
  </div>
)}

// ❌ 나쁜 예
<input type="email" placeholder="이메일" />
```

#### 모달 (Modal)

```tsx
// ✅ 좋은 예
<div
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-title"
  aria-describedby="modal-description"
>
  <h2 id="modal-title">제목</h2>
  <p id="modal-description">설명</p>
</div>
```

### 키보드 네비게이션

모든 인터랙티브 요소는 키보드로 접근 가능해야 합니다:

- **Tab**: 다음 요소로 이동
- **Shift + Tab**: 이전 요소로 이동
- **Enter/Space**: 요소 활성화
- **Esc**: 모달/드롭다운 닫기
- **Arrow keys**: 메뉴/리스트 네비게이션

### 포커스 관리

```tsx
// ✅ 좋은 예: 포커스 스타일 제공
const button = css({
  '&:focus-visible': {
    outline: '2px solid blue',
    outlineOffset: '2px',
  },
});

// ❌ 나쁜 예: 포커스 제거
const button = css({
  '&:focus': {
    outline: 'none',
  },
});
```

### 색상 대비

- 일반 텍스트: 최소 4.5:1
- 큰 텍스트 (18pt 이상): 최소 3:1
- UI 컴포넌트/그래픽: 최소 3:1

도구:
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Chrome DevTools Accessibility Inspector](https://developer.chrome.com/docs/devtools/accessibility/)

### 스크린 리더 지원

```tsx
// ✅ 좋은 예: 의미 있는 텍스트
<button aria-label="사용자 메뉴 열기">
  <UserIcon />
</button>

// ✅ 좋은 예: 숨김 텍스트
<button>
  <span className="sr-only">삭제</span>
  <TrashIcon />
</button>
```

## 테스트 방법

### 1. Storybook 접근성 애드온

모든 스토리는 Storybook의 접근성 애드온으로 테스트됩니다:

```bash
# Storybook 실행
pnpm storybook

# 접근성 탭에서 자동으로 검사됨
```

### 2. 자동화된 테스트

CI에서 자동으로 접근성 테스트가 실행됩니다:

```bash
# 로컬에서 테스트 실행
pnpm test --run --project storybook
```

### 3. 수동 테스트

#### 키보드만으로 테스트

1. 마우스를 사용하지 않고 키보드만으로 모든 기능 사용
2. Tab 키로 모든 인터랙티브 요소 접근 가능한지 확인
3. 포커스가 명확하게 보이는지 확인

#### 스크린 리더 테스트

- **macOS**: VoiceOver (Cmd + F5)
- **Windows**: NVDA 또는 JAWS
- **Chrome**: ChromeVox 확장 프로그램

#### 브라우저 확장 프로그램

- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE](https://wave.webaim.org/extension/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

## 일반적인 접근성 문제와 해결책

### 문제 1: 이미지에 alt 텍스트 없음

```tsx
// ❌ 나쁜 예
<img src="logo.png" />

// ✅ 좋은 예
<img src="logo.png" alt="Daepyro 로고" />

// 장식용 이미지
<img src="decoration.png" alt="" role="presentation" />
```

### 문제 2: 색상만으로 정보 전달

```tsx
// ❌ 나쁜 예
<span style={{ color: 'red' }}>오류</span>

// ✅ 좋은 예
<span style={{ color: 'red' }} aria-label="오류">
  <ErrorIcon /> 오류
</span>
```

### 문제 3: 키보드 접근 불가

```tsx
// ❌ 나쁜 예
<div onClick={handleClick}>클릭</div>

// ✅ 좋은 예
<button onClick={handleClick}>클릭</button>

// 또는
<div 
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick();
    }
  }}
>
  클릭
</div>
```

### 문제 4: 포커스 트랩 없음 (모달)

```tsx
// ✅ 좋은 예: 모달 내부에 포커스 트랩
useEffect(() => {
  const firstFocusable = modalRef.current?.querySelector(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  firstFocusable?.focus();
  
  const handleTab = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;
    
    const focusableElements = modalRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    if (!focusableElements) return;
    
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
    
    if (e.shiftKey && document.activeElement === firstElement) {
      lastElement.focus();
      e.preventDefault();
    } else if (!e.shiftKey && document.activeElement === lastElement) {
      firstElement.focus();
      e.preventDefault();
    }
  };
  
  document.addEventListener('keydown', handleTab);
  return () => document.removeEventListener('keydown', handleTab);
}, []);
```

## 리소스

### 공식 문서

- [WCAG 2.1 가이드라인](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA 사양](https://www.w3.org/WAI/ARIA/apg/)
- [MDN 접근성 가이드](https://developer.mozilla.org/en-US/docs/Web/Accessibility)

### 도구

- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE](https://wave.webaim.org/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

### 학습 자료

- [WebAIM](https://webaim.org/)
- [A11y Project](https://www.a11yproject.com/)
- [Inclusive Components](https://inclusive-components.design/)

## CI/CD 통합

CI 환경에서는 접근성 테스트가 자동으로 실행되며, 위반 사항이 발견되면 빌드가 실패합니다:

```yaml
# .github/workflows/ci.yml
- name: Run accessibility tests
  run: pnpm test --run --project storybook
  env:
    STORYBOOK_A11Y_TEST: 'error'
```

## 질문이나 문제가 있나요?

접근성 관련 질문이나 문제가 있으면 GitHub Issues에 리포트해주세요.


