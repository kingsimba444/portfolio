$(document).ready(function(){
    const myFullpage = new fullpage('#fullpage', {  /* html에서 페이지 전체를 감싸는 요소 */

		navigation: true, /* 오른쪽에 각 페이지의 paging */
		navigationPosition: 'right', /* 위치 */
		navigationTooltips: ['Intro', 'Book', 'News', '현장소식', 'Meeting'], /* 툴팁 */
		showActiveTooltip: true, /* 현재 활성화된 페이지의 툴팁에 특정 클래스 주기 */

		// scrollOverflow: true,

		// afterLoad: function(origin, destination, direction, trigger){
		// 	// console.log(destination.index);
		// 	if((destination.index == 2) || (destination.index == 3) || (destination.index == 4) || (destination.index == 5) ) {
		// 		$('.header').addClass('black');
		// 		$('#fp-nav').addClass('black');
		// 	}
		// 	else {
		// 		$('.header').removeClass('black');
		// 		$('#fp-nav').removeClass('black');
		// 	}
		// 	if(destination.index == 1) { // 보건통계 슬라이드가 나타났을 때
		// 		funCount(); // 함수 이름이 funCount인 것을 실행	
		// 	}
		// },

		responsiveWidth: 640 /* fullpage를 적용시키지 않을 모바일 사이즈 */
	}); // fullpage
});