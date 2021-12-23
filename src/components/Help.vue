<template>
  <div>
    <h1>Vue Blockchain Template</h1>
    <div class="hr"></div>
    <p>
      This template provides you with a starter plate for any blockchain
      project using Vue.js as a front end framework.
    </p>
    <p>It provides a compiler, deployer, and a web3 window to interact .</p>
    <h2>How to start</h2>
    <ol>
      <li>
        <span>
          Run <code>npm install</code> to install all
          depedancies.
        </span>
      </li>
      <li>
        <span>
          Create a <code>.env</code> file and add to it the address of the deployment wallet and the Infura URL as follows:
        </span>
        <div class="code-container">
          <code>PRIVATE_KEY="0x00000..........."</code>
          <code>INFURA_URL="https://rinkeby.infura.io/v3/............" </code>
        </div>
      </li>
      <li>Add your smart contract in /contracts folder.</li>
      <li>Add the smart contract file name in <code>compile-contract.js</code>.</li>
      <li>Add your tests in <code>test/Contract.test.js</code>.</li>
      <li>Run <code>node deploy-contract.js</code> in the terminal to deploy the contract and obtain the contract address and contract ABI.</li>
      <li>Copy ABI and contract address into <code>contract.js</code> file. Both ABI and deployed contract address will be logged in <code>logs/log.txt</code></li>
    </ol>
    <div class="hr"></div>
    <h2>Contact me</h2>
    <p>For any additional comments or questions, feel free to reach out to me via the following platforms:</p>
    <div class="social-media">
      <a href="www.github.com/epicsaeed">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
      </a>
      <a href="mailto:saeed@nuaimi.net">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"/></svg>
      </a>
      <a href="tel:+971506000819">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/></svg>
      </a>
    </div>
    <h1></h1>
  </div>
</template>

<script>
export default {};
</script>

<style>
.hr {
  background: lightgray;
  height: 2px;
  width: 70%;
  margin: 0 auto;
}
h2 {
  text-decoration: underline;
}
.code-container {
  display: flex;
  flex-direction: column;
  font-size: smaller;
  background: lightgray;
  width: fit-content;
  margin: 10px auto;
  padding: 5px;
}
.code-container code{
    text-align: left;
}
code{
    background: lightgrey;
    font-weight: bold;
}
</style>
