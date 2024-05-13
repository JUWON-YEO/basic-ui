// DOM 선택
const links = document.querySelectorAll('.pagination a');

// 함수 구현
const handleLinkClick = (event) => {
    // 기본 동작을 취소합니다.
    event.preventDefault();

    // 모든 링크에서 is-selected 클래스를 제거합니다.
    links.forEach((link) => {
        link.classList.remove('is-selected');
    });

    // 클릭된 링크에 is-selected 클래스를 추가합니다.
    event.target.classList.add('is-selected');
}

// a 요소에 이벤트를 바인딩
links.forEach((link) => {
    link.addEventListener('click', handleLinkClick);
});