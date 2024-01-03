export async function fetchData() {
  try {
      const res = await fetch('/api/items');
      if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
      }
      const data = await res.json();
      return data;
  } catch (error) {
      return null;
  }
}
