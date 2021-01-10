### 学习笔记
## 组件化
#### 组件的基本知识

- **什么是组件？**
  - 区别于对象和模块，它既是模块又是对象，可以说是一种特殊的模块/对象。
  - 与 UI 强相关，通常是指页面上的视图单元。
  - 可以以树形结构进行组合。
  - 有模版化配置的能力。


- **如何设置组件状态？**

- **Children**
  - Content 型 Children
    ```jsx
    <my-button>
      <img src="{{icon}}" />
      {{ title }}
    </my-button>
    ```
  - Template 型 Children
    ```jsx
    <my-list>
      <li v-for="">{{ title }}</li>
    </my-list>
    ```

#### 建立组件的两种风格

- react - JSX
    - JSX 是一个 JavaScript 的语法扩展。
- vue - 标签的 parser




