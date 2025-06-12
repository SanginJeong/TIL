# autoplay 에 대해서

video 태그나 audio 태그를 쓸 때 autoplay를 사용한다.

    <video src="sample.mp4" autoplay />
    <audio src="sample.mp4" autoplay />

하지만 Chrome 에서는 autoplay로 갑자기 재생해버리면 불쾌감을 줄 수 있기 때문에 autoplay만으로는 자동재생 되지 않는다.

음소거를 한 상태로 자동재생은 되므로 muted를 함께 사용해야하고 이 음소거를 통제할 수 있는 controls도 붙여주면 좋다.

    <video src="sample.mp4" autoplay muted controls/>
    <audio src="sample.mp4" autoplay muted controls/>


# iframe
예전에는 frame이라는 태그가 있었는데 여러가지 문제로 안쓴다고 한다.

iframe은 inline-frame 의 줄임말인데 다른 HTML 문서를 불러올 때 사용한다.

대표적인 예시로 유튜브 임베디드 영상, 결제창, 지도 같은 것을 불러올 때 자주 사용한다고 한다.

    <iframe src="banner.html" width="750" height="135"></iframe>

