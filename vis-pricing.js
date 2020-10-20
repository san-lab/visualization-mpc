var state = {
  "ID": "Agent's ID",
  "Title": "Mock PRicing Agent",
  "Description": "A 'mock' dataset to start connecting with VIS.JS",
  "OwnerName": "Acme Corp",
  "OwnerKey": {
    "Curve": {
      "P": 115792089237316195423570985008687907853269984665640564039457584007908834671663,
      "N": 115792089237316195423570985008687907852837564279074904382605163141518161494337,
      "B": 7,
      "Gx": 55066263022277343669578718895168534326250603453777594175500187360389116729240,
      "Gy": 32670510020758816978083085130507043184471273380659243275938904335757337482424,
      "BitSize": 256,
      "Name": "",
      "H": 1
    },
    "X": 8855138442780801176353506548636868656059500751918006001522727905895765068528,
    "Y": 8065899339698401540152579930844234318056274136681996409785851378045583893460
  },
  "OwnerPEM": "-----BEGIN PUBLIC KEY-----\nMFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAEE5PUq8WBzIMHsFqpZF0mXVerrl8HbnQ2\nICaNCuGFSvAR1SMiapXcxLUkDDo1Y6gcyWLg4i0yEh8P+/wI29wj1A==\n-----END PUBLIC KEY-----",
  "PriceGiverKey": null,
  "PriceGiverName": "",
  "Model": {},
  "ModelIntput": {
    "JsonMessage": {
      "Data": "",
      "Signature": "",
      "PublicKey": ""
    },
    "Data": "U29tZSBkYXRh",
    "Signature": null,
    "PublicKey": {
      "Curve": {
        "P": 115792089237316195423570985008687907853269984665640564039457584007908834671663,
        "N": 115792089237316195423570985008687907852837564279074904382605163141518161494337,
        "B": 7,
        "Gx": 55066263022277343669578718895168534326250603453777594175500187360389116729240,
        "Gy": 32670510020758816978083085130507043184471273380659243275938904335757337482424,
        "BitSize": 256,
        "Name": "",
        "H": 1
      },
      "X": 26924735082386881503953565036783669053856320962717752147332289402943300327979,
      "Y": 24645074815705416978325423879158786814689402819438672368959328662190261992238
    },
    "SignatureOK": true
  },
  "InvocationInputs": [
    {
      "JsonMessage": {
        "Data": "",
        "Signature": "",
        "PublicKey": ""
      },
      "Data": "UHJpY2luZyBSZXF1ZXN0IE5vIDE=",
      "Signature": null,
      "PublicKey": {
        "Curve": {
          "P": 115792089237316195423570985008687907853269984665640564039457584007908834671663,
          "N": 115792089237316195423570985008687907852837564279074904382605163141518161494337,
          "B": 7,
          "Gx": 55066263022277343669578718895168534326250603453777594175500187360389116729240,
          "Gy": 32670510020758816978083085130507043184471273380659243275938904335757337482424,
          "BitSize": 256,
          "Name": "",
          "H": 1
        },
        "X": 8855138442780801176353506548636868656059500751918006001522727905895765068528,
        "Y": 8065899339698401540152579930844234318056274136681996409785851378045583893460
      },
      "SignatureOK": true
    },
    {
      "JsonMessage": {
        "Data": "",
        "Signature": "",
        "PublicKey": ""
      },
      "Data": "UHJpY2luZyByZXF1ZXN0IE5vIDI=",
      "Signature": null,
      "PublicKey": {
        "Curve": {
          "P": 115792089237316195423570985008687907853269984665640564039457584007908834671663,
          "N": 115792089237316195423570985008687907852837564279074904382605163141518161494337,
          "B": 7,
          "Gx": 55066263022277343669578718895168534326250603453777594175500187360389116729240,
          "Gy": 32670510020758816978083085130507043184471273380659243275938904335757337482424,
          "BitSize": 256,
          "Name": "",
          "H": 1
        },
        "X": 8855138442780801176353506548636868656059500751918006001522727905895765068528,
        "Y": 8065899339698401540152579930844234318056274136681996409785851378045583893460
      },
      "SignatureOK": true
    }
  ],
  "InvocationLimit": 6,
  "InvocationCount": 2,
  "Started": "2020-10-20T14:40:11.789370292+02:00"
}

var nodes = new vis.DataSet([
  { id: 1, label: "SGX Vault", shape: "square", color: "#97C2FC", size: 40, x: 300, y: 100 },
  { id: 2, label: "Load\nWeights", shape: "box", color: "#FFFF00", size: 15, x: 450, y: 100 },
  {
    id: 3, shape: 'icon',
    icon: {
      face: "'FontAwesome'",
      code: "\uf00c",
      size: 50,
      color: "green",
    }, borderWidth: 2, x: 550, y: 100
  },
  { id: 4, label: "Ask for\npricing", shape: "box", size: 15, color: "#FFFF00", x: 150, y: 100 },
  {
    id: 5, shape: 'icon',
    icon: {
      face: "'FontAwesome'",
      code: "\uf00c",
      size: 50,
      color: "green",
    }, borderWidth: 2, x: 50, y: 100
  },
  { id: 6, label: "Audit\nlogs", shape: "square", color: "#C2FABC", x: 300, y: 250 },
  {
    id: 7, shape: 'icon',
    icon: {
      face: "'FontAwesome'",
      code: "\uf084",
      size: 30,
      color: "#f0a30a",
    }, borderWidth: 2, x: 500, y: 80
  },
  {
    id: 8, shape: 'icon',
    icon: {
      face: "'FontAwesome'",
      code: "\uf084",
      size: 30,
      color: "#f0a30a",
    }, borderWidth: 2, x: 100, y: 80
  },
]);

// create an array with edges
var edges = new vis.DataSet([
  { from: 1, to: 2, color: "rgb(20,24,200)", arrows: "from" },
  { from: 1, to: 4, color: "rgb(20,24,200)", arrows: "from" },
  {
    from: 1,
    to: 6,
    color: "rgb(20,24,200)",
    arrows: "to",
  },
  { from: 2, to: 3, color: "rgb(20,24,200)" },
  { from: 4, to: 5, color: "rgb(20,24,200)" },
  //{ from: 7, to: 2, color: "rgb(20,24,200)", arrows: "to" },
  //{ from: 8, to: 4, color: "rgb(20,24,200)", arrows: "to" },
]);

// create a network
var container = document.getElementById("mynetwork");
var data = {
  nodes: nodes,
  edges: edges,
};
var options = {
  nodes: {
    shape: 'dot'
  },
  edges: {
    smooth: false
  },
  physics: false,
  interaction: {
    dragNodes: false,// do not allow dragging nodes
    zoomView: false, // do not allow zooming
    dragView: false  // do not allow dragging
  }
};
var network = new vis.Network(container, data, options);

window.addEventListener("load", function () {
  setTimeout(function () {
    // create a network
    const network = new vis.Network(container, data, options);
  }, 500);
});