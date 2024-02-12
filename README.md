# Minting Token using ERC-721a

This project demonstrates how to mint tokens using ERC-721a based on the chiru-labs.github.io/ERC721A standard.

## Prerequisites

Before getting started, make sure you have the following:

* Solidity compiler (version X.X.X)
* Truffle framework (version X.X.X)
* Ganache or any Ethereum test network
* Node.js and npm (Node Package Manager)

## Installation

1. Clone the repository:


```bash
git clone https://github.com/flexycode/free-mint-token.git 
```

2. Install the dependencies:
```bash
npm install 
```
## Next.js File Setup

To set up Next.js for this project, follow these steps:

1. Install Next.js globally:

```bash
npm install -g next
```

2. Create a pages directory in the root of your project:
```bash
mkdir pages
```
3. Create a new file `index.js` in the pages directory:

```javascript
// pages/index.js

import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1>Minting Token using ERC-721a</h1>
      <p>Welcome to the Minting Token application!</p>
      {/* Add your components and logic here */}
    </div>
  );
};

export default HomePage;
```
4. Start the Next.js development server:

```bash
npm run dev
```

5. Open your browser and visit http://localhost:3000 to see the Minting Token application.

## Usage  

To mint tokens using ERC-721a, follow these steps:

1. Update the contract configuration in `config.js` file.

2. Compile the smart contract:

```bash
truffle compile 
```
3. Deploy the smart contract to your local blockchain or test network:

```bash
truffle migrate --network development 
```

4. Run the script to mint tokens:
```bash
node mintTokens.js
```

# Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please submit a pull request.

# License

### This project is licensed under the MIT License - flexycode see the LICENSE file for details.


I hope this provides the information you were looking for. Let me know if there's anything else I can assist you with!!
