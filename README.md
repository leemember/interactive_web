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
