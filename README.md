# visualization-pricing
Changes introduced on commit 16.
Mainly I just added checks to know if the ask_pricing nodes are already created or not. The bug was cause we were trying to update nodes that haven't been created previously.
The changes are on these lines 
(lines 559-564): On which we added as you can see if node with id 13 that is the first one of the pricing node does not exist that mean we haven,'t inialized them yet so we do so.
```
	if(nodes.get(13) == null){
      nodes.add(ask_pricing_node(0)); 
      nodes.add(ask_pricing_node(1));
      nodes.add(ask_pricing_node(2));
      nodes.add(ask_pricing_node(3));
    }
```

(lines 585-590): Exact same check but this time on the second part of the updateNodes function. 
```
	if(nodes.get(13) == null){
      nodes.add(ask_pricing_node(0)); 
      nodes.add(ask_pricing_node(1));
      nodes.add(ask_pricing_node(2));
      nodes.add(ask_pricing_node(3));
    }
```
This second half is the one updating the nodes to add them the data that is actually sent by each of the users as a tooltip on the view. The bug was produced by this part of the code.
(line 592): On this line we add the DataPlain as a tooltip to the node and before this patch, sometimes those nodes weren't available at the moment of the update.
```
nodes.update({id: 13+i, title: state["InvocationInputs"][i]["DataPlain"]});
```

With these 2 changes the system should now be resistant to updating nodes that do not exist yet.