import React from 'react'

export default function HomeScreen() {
  return (
    <div className="p-4">
      <h2 className="mb-3">Hi! This is a demo dashboard layout built using Storybook.</h2>

      <p>Only <em>Administration</em> and <em>Assignment</em> pages are implemented.</p>

      <hr className="mt-5 mb-3"/>

      <h2 className="mb-3">Known Issues:</h2>

      <ul className="ms-3">
        <li key={1} style={{"list-style": 'disc'}}>
          <p>
            Path resolving mechanism is different between node-scss and webpack style loaders.
            Please refer to <a href="https://github.com/solring/react-scss-template/issues/1">This issue.</a>
          </p>
        </li>
      </ul>

    </div>
  )
}
