export const render = (html: string) => {
  const app = document.getElementById('app')
  if (app) {
    app.innerHTML = html
  }
}