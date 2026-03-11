export const render = (html: string) => {
  const app = document.getElementById('app')!
  app.innerHTML = html
}