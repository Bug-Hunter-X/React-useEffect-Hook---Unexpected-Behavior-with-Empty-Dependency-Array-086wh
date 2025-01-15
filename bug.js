```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: the callback is called only once on mount,
    // but it's intended to update the count repeatedly.
    const intervalId = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means the useEffect runs only once

  return <div>Count: {count}</div>;
}
```