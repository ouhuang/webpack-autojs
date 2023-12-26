"ui";

/**
 * 首頁 后续慢慢拓展
 */

ui.layout(
  <vertical padding="16" id="parent">
    <horizontal>
        <TextView w="auto" text="选择等级段" />
        <input w="auto" id="totalhs1" minWidth="50" inputType="number" text="69" />
        <TextView w="auto" text="到" />
        <input w="auto" id="totalhs2" minWidth="50" inputType="number" text="69" />
    </horizontal>

    <horizontal>
        <TextView w="auto" text="选择等级段" />
        <input w="auto" id="totalhs3" minWidth="50" inputType="number" text="100" />
        <TextView w="auto" text="到" />
        <input w="auto" id="totalhs4" minWidth="50" inputType="number" text="999" />
    </horizontal>
  </vertical>
);


// 勾选执行队列
// 个人基础、组队、答题