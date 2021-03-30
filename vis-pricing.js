// fetch('http://localhost:8100')
//   .then(response => response.json())
//   .then(state => {
    //////////////NODES//////////////

    var node_off = (x_pos,y_pos,id_num, title_hover) => { return { id: id_num, shape: 'icon', icon: { face: "'FontAwesome'", code: "\uf1b2", size: 40, color: "black", }, borderWidth: 2, x: x_pos, y: y_pos, title:  title_hover}}
    var node_on = (x_pos,y_pos,id_num, title_hover) => { return { id: id_num, shape: 'icon', icon: { face: "'FontAwesome'", code: "\uf1b2", size: 40, color: "green", }, borderWidth: 2, x: x_pos, y: y_pos, title:  title_hover}}
    
    var nodes = new vis.DataSet([]);

    ///////////////EDGES/////////////

    var between_nodes = (from_node,to_node) => {return { from: from_node, to: to_node, color: "rgb(20,24,200)", arrows: "from, to" }}
    
    // create an array with edges
    var edges = new vis.DataSet([]);

    var updateNodesAndEdges = (edges, nodes,state, numNodesInserted) => {
      //State machine
      numNodes = state["Nodes"].length + 1
      titles = []
      titles.push(buildTitle(state["ThisName"], state["ThisId"],state["ThisAddress"]))
      for(let i = numNodesInserted; i < numNodes-1; i++){
        titles.push(buildTitle(state["Nodes"][i]["Name"], state["Nodes"][i]["ID"], state["Nodes"][i]["Address"]))
      } 
      for(let i = numNodesInserted; i < numNodes; i++){
        nodes.add(node_on(0, 0,i, titles[i]));
        if (i > 0) {
          for(let j = 0; j < i; j++){
            edges.add(between_nodes(j,i));
          }
        }
      }
      return numNodes             
    }

    var buildTitle = (name, ID, address) => {
      return "Name: " + name + "\n" + "ID: " + ID + "\n" + "Address: " + address
    }

    //updateNodes(state);

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
       physics: true,
       interaction: {
         dragNodes: false,// do not allow dragging nodes
         zoomView: false, // do not allow zooming
         dragView: false  // do not allow dragging
       }
    };
    var network = new vis.Network(container, data, options);
    var numNodesInserted = 0;

    function timeout() {
      setTimeout(function () {
        // fetch('http://localhost:8100')
        //   .then(response => response.json())
        //   .then(state => {
          state = {
  "ThisName": "Alice",
  "ThisId": "3089053916941511196",
  "ThisAddress": "172.17.0.2",
  "ThisPassword": "",
  "ThisEvaluationPoint": {
   "V": 1,
   "M": 65000549695646603732796438742359905742570406053903786389881062969044166799969,
   "BO": false
  },
  "ThisSecretValue": null,
  "ThisPublicKey": null,
  "DisableBroadcast": false,
  "PendingJobs": {
   "ID0f6017556475602505628": {
    "JobID": "ID0f6017556475602505628",
    "AgentID": "6017556475602505628",
    "Type": "TestJob",
    "Finished": false,
    "Error": "",
    "Payload": "Are you there?"
   },
   "ID1f3089053916941511196": {
    "JobID": "ID1f3089053916941511196",
    "AgentID": "3089053916941511196",
    "Type": "MPSignature",
    "Finished": false,
    "Error": "",
    "Payload": "02000000000000000000000000000000000000000000000000000000000000000212dc2ddad8ed72726c8e7d4daaeaba8480984f3efbfae14dd71f26182498ca154d93a90afdebeb0a815a3f258a9c866f36668767525ba7348f18db1c5f1157142439646639643439342d376333632d313165622d623865362d62383662323334383934623848656c6c6f20426f62"
   }
  },
  "DoneJobs": {
   "ID0f3089053916941511196": {
    "JobID": "ID0f3089053916941511196",
    "AgentID": "3089053916941511196",
    "Type": "TestJob",
    "Finished": true,
    "Error": "",
    "Payload": "Are you there?"
   }
  },
  "JobBroadcast": {},
  "KnownScalarShares": {
   "9df9d494-7c3c-11eb-b8e6-b86b234894b8": [
    {
     "E": {
      "V": 2,
      "M": 65000549695646603732796438742359905742570406053903786389881062969044166799969,
      "BO": false
     },
     "V": {
      "V": 18267298965087384827294908530404108237589431360719280554881346428202447285138,
      "M": 65000549695646603732796438742359905742570406053903786389881062969044166799969,
      "BO": false
     },
     "T": 2,
     "SuiteID": "9df9d494-7c3c-11eb-b8e6-b86b234894b8"
    }
   ]
  },
  "Nodes": [
   {
    "Name": "Bob",
    "ID": "6017556475602505628",
    "Address": "172.17.0.3",
    "LastSeen": "2021-03-30T09:46:14.9856168Z",
    "PendingJobs": [
     "ID1f3089053916941511196",
     "ID0f6017556475602505628"
    ],
    "DoneJobs": [
     "ID0f3089053916941511196"
    ]
   },
   {
    "Name": "Carol",
    "ID": "3895312406672063063",
    "Address": "172.17.0.4",
    "LastSeen": "2021-03-30T09:46:15.2296065Z",
    "PendingJobs": [
     "ID0f3089053916941511196",
     "ID0f6017556475602505628",
     "ID1f3089053916941511196"
    ],
    "DoneJobs": []
   },
   {
    "Name": "Denver",
    "ID": "3877312406672063063",
    "Address": "172.17.0.5",
    "LastSeen": "2021-03-30T09:46:15.2296065Z",
    "PendingJobs": [
     "ID0f3089053916941511196",
     "ID0f6017556475602505628",
     "ID1f3089053916941511196"
    ],
    "DoneJobs": []
   }
  ]
 }
            numNodesInserted = updateNodesAndEdges(edges, nodes, state, numNodesInserted);
            var data = {
              nodes: nodes,
              edges: edges,
            };
            network = new vis.Network(container, data, options);
          // })
        timeout();
      }, 7000);
    };

    timeout()
  // });

