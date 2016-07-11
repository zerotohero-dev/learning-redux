### Principles of **Redux**

1. Everything that changes in your application, including the data and the UI state, is contained in a single object which is called the **state** or the **state tree**.
2. The state tree is **read-only**. You cannot change it. Whenever the state needs to change, you need to **dispatch** an **action**. — An **action** is a plain JavaScript object describing the change. The **action** is an **atomic** representation of the change to the data. `{foo, type: 'ACTION_TYPE'}`. — Any data that gets into the **redux** application gets there by **action**s.
3. The view layer is a **pure function** of the application state because the UI, or the view layer is best described when it is a pure function of the application state. — The state mutations in your app need to be described as a pure function that takes the **previous state** and the **action** being dispatched and returns the **next state** of your application. — This does not have to be slow: you create a **new object** when returning the new state to remain pure; however you can keep a reference to older, unchanged objects. `(nextState) reducer(prevState, action)`