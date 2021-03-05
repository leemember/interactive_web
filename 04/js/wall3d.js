(function () {
    const houseElem = document.querySelector('.house');
    //Progress Bar 엘리먼트
    const barElem = document.querySelector('.progress-bar');
    let maxScrollValue;

    function resizeHandler() {
      maxScrollValue = document.body.offsetHeight - window.innerHeight; //현재 높이 - 윈도우 높이
      //💙작업할 때 필수로 해주어야 되는 부분입니다!!
      //🎅🏻위에 쓴 코드를 그대로 갖다 넣는다. 그러면 리사이즈가 될 때마다
      //maxScrollValue가 새로 세팅이 되어 바뀐 창 사이즈가 적용이 되면서
      //zMove가 적용이 될 것이다.
    }

    window.addEventListener('scroll', function() {
      const scrollPer = pageYOffset / maxScrollValue;
      const zMove = scrollPer * 970 - 490; // 3. 그래서 똑같이 -490을 해준다.
      houseElem.style.transform = 'translateZ(' + zMove + 'vw)';
      //1. 이렇게 코드를 작성하면 내 눈앞에 바로 있는 것 처럼 보이는데
      //그 이유는 스크롤 하기 전에는 스타일이 -490이었는데 스크롤을 하는 순간 바로
      //2. zMove = 0값이 되어버리는거다. 그래서 눈앞에 탁 나타난 것 처럼 된다.

      //💫Progress bar 작업
      barElem.style.width = scrollPer * 100 + '%'; // *100해서 %퍼센트로 만들어준다.
      //그럼 스크롤 한 양에 따라서 progress bar가 점점 채워진다.
    });

    window.addEventListener('resize', resizeHandler);
    //resize라는 이벤트를 쓸 때마다 resizeHandler의 함수가 반응하게 적용하기.
    resizeHandler(); //리사이즈 작업은 인터렉티브 웹처럼 자바스크립트 작업이 쌔게 들어갈 때 필수적으로 해주어야된다.
})();
