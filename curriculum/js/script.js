"use strict";
/**
 * 获取ID的DOM元素
 * @param {string} id 
 */
function $(id){  //具名函数 会自动提升，不必先定义后使用
  if (typeof id == "string") {
    alert("it is a string");
    return document.getElementById(id);
  } else {
    alert("it is required a string");
    throw  new console.error("参数");
  }
  
}

/**
 * 创建元素
 */
function createEl(node) {
  return document.createElement(node)
  
}
/**
 * 设置节点属性
 */
function setAttr(node,styles){
  for(let key in styles){
    node.setAttribute(key,styles[key]);
  }
}
/**
 * 获取节点属性
 */
function getAttr(node,attr) {
  return node.getAttribute(attr);
  
}

const divDom = $("table-data-wrap");
const tableDom = createEl('table');
setAttr(tableDom,{
  'width':'100%',
  'border':'2px',
  'cellpadding':'2px',
  'cellspacing':'0',
  'id':'table-data-wrap'
});


tableDom.innerHTML = `<thead>
                        <tr>
                          <th>头像</th>
                          <th>姓名</th>
                          <th>性别</th>
                          <th>年龄</th>
                          <th>手机号</th>
                          <th>国籍</th>
                          <th width="200">爱好</th>
                          <th>头衔</th>
                          <th>操作</th>
                        </tr>
                        </thead>`
divDom.appendChild(tableDom)
