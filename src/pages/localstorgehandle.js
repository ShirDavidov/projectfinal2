// developers:
// Mor Yossef 209514264
// Shir Davidov 318852159
// Rinat Polonski 313530842

// build a namespace object
export const myLocalStorage = {};

// saveToLocalStorage
myLocalStorage.saveToLocalStorage = function (key, value){
    return new Promise((resolve, reject) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            resolve();
        } catch (error) {
            reject(error);
        }
    });
};

//getItemLocalStorage
myLocalStorage.getItemLocalStorage = function(key) {
    return new Promise((resolve, reject) => {
        try {
            localStorage.getItem(key);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
};

//removeItemLocalStorage
myLocalStorage.removeItemLocalStorage = function(key) {
    return new Promise((resolve, reject) => {
        try {
            localStorage.removeItem(key);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
};


//getAllFromLocalStorage
myLocalStorage.getAllFromLocalStorage = function() {
    return new Promise((resolve, reject) => {
        try {
            const items = {};
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                const value = JSON.parse(localStorage.getItem(key));
                items[key] = value;
            }
            resolve(items);
        } catch (error) {
            reject(error);
        }
    });
};

window.myLocalStorage = myLocalStorage;