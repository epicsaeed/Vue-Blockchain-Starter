import web3 from "./web3";

const CONTRACT_ADDRESS = "0x000000000000000000000000";
const CONTRACT_ABI = [ ];

export default new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);