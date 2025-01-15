# React useEffect Hook - Unexpected Behavior with Empty Dependency Array

This repository demonstrates a common mistake when using the `useEffect` hook in React.  The provided code intends to create a simple counter that increments every second. However, due to an incorrect use of the dependency array, the counter does not update correctly.

The issue lies in the empty dependency array (`[]`) in the `useEffect` hook. This causes the `setInterval` function to be executed only once upon the component's initial mount.  The `count` variable within the `setInterval` callback is referencing the initial value and not the updated value.

The solution demonstrates the correct implementation, making the counter increment every second as expected.