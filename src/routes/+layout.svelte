<div class="container">
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/FilteredInp">Input Fields</a></li>
      <li><a href="/MovingDiv">Moving Div</a></li>
      <li><a href="/SwitchBtn">Switch Button</a></li>
      <li><a href="/Monaco">Monaco Editor</a></li>
    </ul>
  </nav>

  <slot />
</div>

<style>
  .container {
    width: 80%;
    height: 100%;
    margin: auto;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  li {
    float: left;
  }

  li a {
    display: block;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  li a:hover {
    background-color: #9fc3c9;
    color: white;
  }
</style>
