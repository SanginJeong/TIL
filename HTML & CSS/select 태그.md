## select 태그

### 구조

    <select id="start_time">
      <option>9</option>
      <option>10</option>
      <option>11</option>
      <option>12</option>
      <option>13</option>
      <option>14</option>
      <option>15</option>
      <option>16</option>
      <option>17</option>
    </select>

### JS로 가져오는 법

    const $start_time = document.querySelector('#start_time');


### select는 options 와 selectedIndex를 제공해준다.

    selecttag.options[selecttage.selectedIndex].value || textContent

value를 가져오고싶으면 value 아니면 textContent 등을 이용