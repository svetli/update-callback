# update-callback

> Running callbacks in specific order based on their priority

## Install

```
$ npm install --save update-callback
```

## Usage
```js
const callback = () => {
	// doSomething
};

addUpdateCallback(1, callback);
```

## API

#### addUpdateCallback(priority, callback)

##### priority
Type: `int`
Running priority. The higher priority callbacks will run first.

##### callback
Type: `function`
Specify the callback function to execute when an update event occurs.

#### removeUpdateCallback(priority, callback)
Type: `function`
A function that are to be removed from the callback list.
