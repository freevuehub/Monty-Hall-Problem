# 몬티 홀의 역설

'몬티 홀'이라는 미국/캐나다 TV 프로그램 사회자가 진행하던 미국 오락 프로그램 《Let's Make a Deal》에서 유래한 확률 문제입니다.

몬티 홀의 문제는 다음의 룰로 진행된다.

- 문 3개가 있다. 한 문 뒤에는 자동차가 있고 나머지 두 문 뒤에는 염소가 있다. 참가자는 이 상황에서 문을 하나 선택하여 그 뒤에 있는 상품을 얻는다.
- 참가자가 어떤 문을 선택하면 사회자는 나머지 두 문 중에 염소가 있는 문 한 개를 열어 참가자에게 그 문에 염소가 있다고 확인시켜준다.
- 그 후 사회자는 참가자에게 선택한 문을 닫혀있는 다른 문으로 선택을 바꿀 기회를 준다.

**이때 참가자가 바꿀 경우와 바꾸지 않을 경우의 활률은 얼마나 되는가?**

### 개발한 이유

다른 이유는 없었다. 유튜브를 보다 해당 문제와 관련된 영상을 보게 되었다. 그리고 몇년전 인기를 끌었던 드라마 `D.P`에서도 해당 문제가 나와 재미를 주었다.

문제의 답을 알고 있는 상황이에서 실제 그런 확률이 나오는지 궁금했다. 그래서 코드를 이용하여 활률을 직접 확인하고자했다.

### 실행

`deno run index.ts`
