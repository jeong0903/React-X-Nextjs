import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by 9193jane",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <h1><a href="/">WEB</a></h1>
        <ol>
          <li><a href="/read/1">html</a></li>
          <li><a href="/read/2">css</a></li>
        </ol>
        {children}
        <ul>
          <li><a href="/create">Create</a></li>
          <li><a href="//update/1">Update</a></li>
          <li><input type="button" value="delete" /></li>
        </ul>
      </body>
    </html>
  )
}
