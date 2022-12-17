//https://livecodestream.dev/post/interacting-with-smart-contracts-from-web-apps/

async function loadWeb3() {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        window.ethereum.enable();
    }
}

async function loadContract() {
    return await new window.web3.eth.Contract([
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "num1",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "num2",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "yourname_",
                        "type": "string"
                    }
                ],
                "name": "ownDocument",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "yourId",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "text_",
                        "type": "string"
                    },
                    {
                        "internalType": "bool",
                        "name": "ownable_",
                        "type": "bool"
                    }
                ],
                "name": "signDocument",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "returnedN1",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "returnedN2",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "ownability",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "nonce_",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "num1",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "num2",
                        "type": "uint256"
                    }
                ],
                "name": "getData",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "returnedText",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "returnedDate",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "owner",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "id_",
                        "type": "uint256"
                    }
                ],
                "name": "viewOwner",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "Owner",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            }
        ]
        , "0xFb9D37Ec1D032DdD2256f5BF0e016EfB33482D93");
}

async function load() {
    await loadWeb3();
    window.contract = await loadContract();
    updateStatus('Ready! Contract loaded!');
}

load();


function updateStatus(status) {
    const statusEl = document.getElementById('status');
    statusEl.innerHTML = status;
}


async function printCoolNumber() {
    updateStatus('fetching Cool Number...');
    const coolNumber = await window.contract.methods.coolNumber().call();
    updateNumber(`coolNumber: ${coolNumber}`);
}


async function submitNums() {
    var n1 = document.getElementById("inputNum1").value;
    var n2 = document.getElementById("inputNum2").value;
    const account = await getCurrentAccount();
    try {
        const {rtext, rdate} = await window.contract.methods.getData(n1,n2).call({ from: account });
        if (rtext != undefined & rdate != undefined) {
            const message = document.getElementById('isCorrect');
            message.innerHTML = "Numbers submitted correctly!";
            const textEl = document.getElementById('text');
            textEl.innerHTML = rtext;
            const dateEl = document.getElementById('date');
            dateEl.innerHTML = rdate;
        } else {
            const message = document.getElementById('isCorrect');
            message.innerHTML = "The combination of numbers submitted do not match any signed document";;
        }

        
    } catch (error) {
        const message = document.getElementById('isCorrect');
        message.innerHTML = error;
        console.error(error);
    }   
}

async function changeCoolNumber() {
    const value = processInput("inputField");
    updateStatus(`Updating coolNumber with ${value}`);
    const account = await getCurrentAccount();
    const coolNumber = await window.contract.methods.setCoolNumber(value).send({ from: account });
    updateStatus('Updated.');
}

async function getCurrentAccount() {
    const accounts = await window.web3.eth.getAccounts();
    return accounts[0];
}