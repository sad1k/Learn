class MyPromise {
  constructor(executor) {
    this.state = "pending";
    this.value = undefined;
    this.reason = undefined;
    this.stack = [];

    this._resolve = (value) => {
      if (this.state === "pending") {
        this.state = "fullfilled";
        this.value = value;
        queueMicrotask(() => this.execution());
      }
    };

    this._reject = (reason) => {
      if (this.state === "pending") {
        this.state = "rejected";
        this.value = reason;
        queueMicrotask(() => this.execution());
      }
    };

    try {
      executor(
        (val) => this._resolve(val),
        (e) => this._reject(e)
      );
    } catch (error) {
      this._reject(error);
    }
  }

  static resolve(value) {
    return new MyPromise((res, rej) => {
      res(value);
    });
  }

  static reject(value) {
    return new MyPromise((res, rej) => {
      rej(value);
    });
  }

  execution() {
    if (this.state === "rejected" && this.stack.length === 0) {
      throw this.value;
    }

    this.stack.forEach((executor) => {
      queueMicrotask(() => {
        const callback =
          this.state === "fullfilled" ? executor.onResolve : executor.onReject;
        if (callback === null) {
          if (this.status === "fullfilled") {
            this._resolve.call(executor.promise, this.value);
          } else {
            this._reject.call(executor.promise, this.value);
          }
          return;
        }
        let result;
        try {
          result = callback(this.value);
          if (result instanceof MyPromise) {
            result.then(
              (val) => executor.promise._resolve(val),
              (err) => executor.promise._reject(err)
            );
          } else {
            executor.promise._resolve(result);
          }
        } catch (error) {
          executor.promise._reject(error);
        }
      });
    });
  }

  then(callbackOnResolve, callbackOnReject) {
    const promise = new MyPromise((res, rej) => {});
    this.stack.push({
      onResolve: callbackOnResolve,
      onReject: callbackOnReject,
      promise,
    });
    return promise;
  }

  catch(callback) {
    return this.then(null, callback);
  }

  finally(callback) {
    callback();
    return this
  }
}

const myprom = new MyPromise((res, rej) => {
  setTimeout(() => res(100), 5000)
}).then((val) =>{
  console.log(val)
  return 150
}
).then(val => console.log(val))