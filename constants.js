import ContractABI from './secondhand.json'
import Web3 from 'web3'

//export const address = '0xE567bccBf7d9cb484B8EB143542b293F8020C7ed' //goerli
export const address = '0xB872efE46199A5e6E21E37d962e381C14F90d0C9' //ganache

export const createContract = () => {
  const { ethereum } = window
  if (ethereum) {
    const web3 = new Web3(ethereum)
    return new web3.eth.Contract(ContractABI.abi, address)
  }
}

export const modalStyles = {
  content: {
    height: 'fit-content',
    width: 'fit-content',
    margin: 'auto',
    marginTop: '10px',
    display: 'flex',
    padding: '0px',
  },
  overlay: {
    backgroundColor: 'rgb(0 0 0 / 74%)',
  },
}
