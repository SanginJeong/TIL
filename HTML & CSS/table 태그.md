## table 태그

### 구조

    <table>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>

*th 태그는 제목 느낌

### table 태그에서 안 요소에 접근 방법

    const $table = document.querySelector('table');
    $table.rows[인덱스].cells[인덱스];

### 셀 병합 하는 법

가로방향 병합 : colspan

세로방향 병합 : rowspan

    <tr>
      <td rowspan='2'>1</td>
      <td>1</td>
    </tr>
    <tr>
      <!--<td>1</td>-->
      <td>2</td>
    </tr>

세로병합을 해서 원래있던 1태그가 주석처리됨

### table 태그의 display

- table 태그의 기본 display 는 table-cell이다.

setAttribute로 병합한 후 다시 원래대로 되돌릴 때, display:block 을 사용해서 애먹었던 적이 있다.