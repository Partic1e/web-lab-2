const TODO_ITEMS_LOCAL_STORAGE_KEY = 'TODO_ITEMS_LOCAL_STORAGE_KEY';

export const LocalStorage = {
  getTodoItemsFromLocalStorage: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const rawData = localStorage.getItem(TODO_ITEMS_LOCAL_STORAGE_KEY);
        const defaultResult = [];
        
        if (!rawData) {
          resolve(defaultResult);
          return;
        }
        const data = JSON.parse(rawData);
    
        if (!Array.isArray(data)) {
          resolve(defaultResult);
          return;
        }
    
        resolve(data);
      }, 100);
    })
  },

  saveTodoItemToLocalStorage: (todoItem) => {
    return new Promise((resolve, reject) => {
      LocalStorage.getTodoItemsFromLocalStorage().then((todoItems) => {
        const newTodoItems = [...todoItems, todoItem];
        localStorage.setItem(TODO_ITEMS_LOCAL_STORAGE_KEY, JSON.stringify(newTodoItems));
        resolve();
      })
    });
  },

  // удаление элемента из local storage
  // просто собираем все элементы, у которых id не равен элементу, который надо удалить,
  // в новый список и отправляем его в local storage
  deleteTodoItemFromLocalStorage: (todoId) => {
    return new Promise((resolve, reject) => {
      LocalStorage.getTodoItemsFromLocalStorage().then((todoItems) => {
        const updatedTodoItems = todoItems.filter(item => item.id !== todoId);
        localStorage.setItem(TODO_ITEMS_LOCAL_STORAGE_KEY, JSON.stringify(updatedTodoItems));
        resolve();
      });
    });
  },

  // запись обновлённого элемента
  updateTodoItemStatusInLocalStorage: (todoId, isDone) => {
    return new Promise((resolve, reject) => {
      LocalStorage.getTodoItemsFromLocalStorage().then((todoItems) => {
        const updatedTodoItems = todoItems.map(item =>
          item.id === todoId ? { ...item, isDone } : item
        );
        localStorage.setItem(TODO_ITEMS_LOCAL_STORAGE_KEY, JSON.stringify(updatedTodoItems));
        resolve();
      });
    });
  },

  // запись обновлённого приоритета
  updateTodoItemPriority: (todoId, priority) => {
    return new Promise((resolve, reject) => {
      LocalStorage.getTodoItemsFromLocalStorage().then((todoItems) => {
        const updatedTodoItems = todoItems.map((item) => {
          if (item.id === todoId) {
            return { ...item, priority };
          }
          return item;
        });
        localStorage.setItem(TODO_ITEMS_LOCAL_STORAGE_KEY, JSON.stringify(updatedTodoItems));
        resolve();
      });
    });
  },

}