# 🎆인터랙티브 웹 개발

- 요즘 웹 트랜드에 맞는 인터랙티브 웹 구현하기

<br>

## 01 : CSS변환과 애니메이션

> animation과 keyframe을 이용하여 재밌는 콘텐츠 만들기

[01] - [01_04.html] 파일을 열어보면 이 작업은 gif로 해도 되는데 굳이 이런식으로 작업하는 이유는
GIF는 치명적인 단점들이 많기 때문이다.

1. 알파채널인 투명도가 적용이 안되어서 이미지가 깨진다.
2. keyframe을 사용하면 코드로 마음대로 제어가 가능하다. (속도, 방향, 기울기, 효과 등등 여러모로 좋음)

```
animation: sample-ani 2s linear infinite forwards;
```

- alternate : 다시 제자리로 돌아가도록
- reverse : 반대방향에서 시작하는거
- alternate-reverse : 출발은 반대로해서 왔다갔다함
- forwards : 애니메이션이 끝나면 마지막지점에 멈춰있도록

<br>

## 02 : CSS 3D

> CSS 3D는 어렵지 않으면서도 특별한 효과를 내기에 아주 좋다. 적절히 잘 쓰면 굉장히 고급스러우면서도 특이한 효과를 낼 수 있어 익혀두면 좋다.

- 가운데 정렬하기 가장 좋은 코드

```
  display: flex;
  align-items: center;
  justify-content: center;
```

> 부모 태그와 자식 태그 둘 다 적용해주면 자식태그는 부모태그의 정 가운데로 정렬된다.

<br>

- 뷰포트(view port) 단위

```
  vw : view port width
  vh : view port height
```

> 60vw 면 100중에 60퍼만 뷰 기준으로 width값을 잡는다

<br>

- 3D 효과 원동감 주기

```
.world {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60vw;
  height: 60vh;
  background-color: skyblue;
  perspective: 500px;
  }
```

> .world는 3D 공간이 아니기 때문에 원등감 주려면 perspective: 1000px; 이걸 적용해야한다.
> 그래야 3D공간으로 바뀐다. perspective에 적용한 값이 작으면 작을수록 내 눈에 더 가까히 있다는 느낌이다.
> 값이 크면 클수록 크기가 완만하게 보인다. (수치 = 내눈과의 거리라고 생각하면됨)

<br>

- 상대적으로 비례할 수 있게 하는 단위

```
  border-radius: 0.5em;
  font-size: 1.5rem;
```

> font-size의 사이즈가 변동되면 border-radius도 상대적으로 사이즈가 변한다. 폰트사이즈랑 비례할 수 있도록 em을 사용한 것이다.

### <b>💥 3D효과를 줄 때 각 브라우저마다 생기는 문제들을 해결하는 방법</b>

> 3D 효과는 크롬에서는 잘 되는데 사파리라던지, 인터넷 익스플로어에서는 지원을 안해주는 경우가 많다. 이런점을 보완하기 위한 방법들을 알아보자.

<br>

인터넷 익스플로어에서는

```
transform-style : preserve-3d;
```

효과가 먹히지 않는다. 부모 > 바로 아래 자식한테만 적용이 된다.
그래서 [2 - 02_02.html] 예제에서는 card라는 div태그를 제거했다.

<br>

## 03 : FLEX 그리드 알아보기

> 알아두면 실무에 자주 사용하니 좋다.

1. justify-content

- justify-content: flex-start; => 기본값
- justify-content: flex-end; => 끝으로간다.
- justify-content: center; => 가운데정렬
- justify-content: space-between; => 사회적 거리두기처럼 일정한 간격으로 여백을 둬서 객체들이 띄워져있다.
- justify-content: space-around; => between과 비슷하지만, 객체들이 좀 더 주변으로 가까히 위치해있다.

2. align-items

- align-items: stretch; => 기본값. 왼쪽부터 정렬 (수직방향)
- align-items: flex-start; => 위 (내용 크기만큼)
- align-items: flex-end; => 아래
- align-items: center; => 가운데

3. flex-direction

- flex-direction: row; => 기본값
- flex-direction: column-reverse; => 가로 반대방향으로 위치가 변한다
- flex-direction: row-reverse; => 세로방향의 위치가 반대로 변한다

4. flex-basis

- flex-basis: 0; => 안에 있는 텍스트 넓이 관계없이 비율이 1 : 1 : 1 로 된다.

5. flex

> flex:1 => 자동으로 flex-basis도 0이고 flex-grow도 1로 적용된다.

6. flex-grow

```
  .item:nth-child(1) { flex-grow: 1;}
  .item:nth-child(2) { flex-grow: 5;}
  .item:nth-child(3) { flex-grow: 2;}
  .item:nth-child(4) { flex-grow: 3;}
  .item:nth-child(5) { flex-grow: 1;}
```

해당 값의 비율을 나타내준다.
이 값들을 줄 때 기본적으로 display: flex; 를 세팅해줘야 css에 flex 값들이 적용된다.

---

## 😎 인터랙티브 <b>웹 개발을 위한 자바스크립트 시작</b>하기

<br>

### 😁 DOM 스크립트

```
document.querySelector('.character .ilbuni:nth-child(2)')
```

이런식으로 css로 조작하여 두 번째 객체를 선택할 수도 있다.

data-로 시작하는 표준 커스텀 속성이다.

- data-index
- data-id
- data-role

등 data- 의 형식으로 시작하면 어떤 속성이든 필요에 따라 임의로 추가할 수 있다.

```
char.setAttribute('data-id', 123)
```

이렇게 지정하고

```
char.getAttribute('data-id')
```

> 입력하면 "123"이 출력된다.

<br><br>

### 😁 객체 붙히기

```
객체명.appendChild()
```

> 이 메서드는 넣고싶은 객체를 붙일 수 있다.

```
removeChild()
```

> 객체를 삭제한다.

```
const abc = document.querySelector('.ilbuni');
abc.classList.add('special');
```

> 클레스를 붙혀준다. special이라는 스타일을 가진 클레스를 붙혀줌.

```
const abc = document.querySelector('.ilbuni');
abc.classList.remove('special');
```

> 클레스를 삭제해준다. special이라는 스타일을 가진 클레스를 삭제해줌

```
const abc = document.querySelector('.ilbuni');
abc.classList.toggle('special');
```

> 한 번 실행해주면 true로 스페셜 클레스를 붙혀주고, 또 재실행 하면 false로 스페셜 클래스가 제거된다.

<br><br>

### 😁 이벤트 다루기

```
const ilbuni = document.querySelector('.ilbuni:nth-child(3)')
ilbuni.addEventListener('click', function() {
  ilbuni.classListe.add('special');
}, )
```

> 이벤트를 리스너 시킬 때 addEventListener이렇게 메소드를 선언한 후에 어떤 이벤트를 실행할 것인지 이벤트명을 넣고 함수를 작성해주면 된다.
> 💛이 코드는 클릭을 할 때마다 special이라는 클레스가 붙도록 지정해주었다.

1. 클릭할 엘리먼트를 지정해준다.
2. add리스너를 붙혀줌으로써 이벤트를 등록 해준다.

```
<script>
  window.addEventListener('DOMContentLoaded', function() {
    const ilbuni = document.querySelector('.ilbuni.c');
    function clickIlbuniHandler() {
      ilbuni.classList.toggle('special');
    }
    ilbuni.addEventListener('click', clickIlbuniHandler);
  })
</script>

<body>
  <div class="characters">
    <div class="ilbuni a">
      <img src="images/ilbuni_0.png" alt="일분이">
    </div>
    <div class="ilbuni b">
      <img src="images/ilbuni_1.png" alt="일분이">
    </div>
    <div class="ilbuni c">
      <img src="images/ilbuni_2.png" alt="일분이">
    </div>
  </div>
  <div class="ilbuni d">
    <img src="images/ilbuni_3.png" alt="일분이">
  </div>
```

> script를 선언할 때 body 태그 안에 있는 것들 보다 위에 선언해줄 경우, window.addEventListener('DOMContentLoaded', function() 을 안해주면 콘솔에 null값이 찍힌다. 그 이유는 브라우저가 렌더링을 할 때 위에서부터 읽어내려오는데, body값보다 script가 먼저 선언 되었기 때문이다. 그래서 저 문구안에다가 script 내용들을 넣어야 한다.
> window.addEventListener 중에 load라는 값과 DOMContentLoaded라는 값이 있는데, 두 개의 기능을 살펴보면 이렇다.

- 💥 window.addEventListener('load', function() { => 이 파일에 있는 모든 내용물들이 load가 되야 함수들이 실행된다.
- 💥 window.addEventListener('DOMContentLoaded', function() { => html에 있는 골격 부분들만 load가 끝나면 실행이 된다.

공통점은 둘 다 body위에 script를 넣어도 렌더링을 할 수 있게 해준다는 것이고. E9이상부터 지원이 되는 문법이다.

<br>

### 💥 제일 좋은 방법은 script문을 그냥 맨 아래에 삽입하기

```
addEventListener('DOMContentLoaded', function()
```

그럼 이런 것도 선언 안해줘도 된다.

### 스크립트 주의할 점

```
const ilbuni = document.querySelector('.ilbuni.c');

  function clickIlbuniHandler() {
    ilbuni.classList.toggle('special');
  }
  ilbuni.addEventListener('click', clickIlbuniHandler);
```

> ilbuni는 전역변수인데 전역변수를 스크립트 코드에 난발하면 스크립트상 안좋다.
> 그래서 전역변수로 지정해주고싶지 않다면 함수 안에다가 선언해줄 수도 있다.

```
 function ilbun() {
    const ilbuni = document.querySelector('.ilbuni.c');

  function clickIlbuniHandler() {
    ilbuni.classList.toggle('special');
  }
  ilbuni.addEventListener('click', clickIlbuniHandler);
  }

  ilbun();
```

> 이렇게 함수 안에다가 ilbun라는 함수를 만들어놓고, 호출 해즐 때도 ilbun() 이렇게 호출할 수도 있다. 하지만 함수이름 짓기가 싫다면 일회성으로 호출해주는 방법도 있다.

```
(function() {
  const ilbuni = document.querySelector('.ilbuni.c');

function clickIlbuniHandler() {
  ilbuni.classList.toggle('special');
}
ilbuni.addEventListener('click', clickIlbuniHandler);
})();
```

> 이렇게 전체 함수에 ()로 감싸주고 호출 할 떄도 () 이것만 호출해주면 동작이 된다. 그리고 어디 취업할 때도 이렇게 코드를 작성하는 것이 더 가산점이 된다고 한다.
