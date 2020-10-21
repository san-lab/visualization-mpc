fetch('https://researchbox1.uksouth.cloudapp.azure.com/pricing/agentmock')
  .then(response => response.json())
  .then(state => {

    var states_test = [
          {},{ //1
            "ID": "Mock Agent's ID",
            "Title": "Mock Pricing Agent",
            "Description": "A 'mock' dataset to start connecting with VIS.JS",
            "OwnerName": "Acme Corp",
            "OwnerKeyPEM": "-----BEGIN PUBLIC KEY-----\nMFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAEL/Z8GX2L+9mVd9z/FgR2ewPwpudotqOF\nLKXiBKrmxRC58/3TEYxNHAx9sV1ezzzp93zXIBeLxQ10MesiZYVn5A==\n-----END PUBLIC KEY-----",
            "PriceGiverKeyPEM": "",
            "PriceGiverName": "",
            "Initialized": false,
            "ModelIntput": {
             "JsonMessage": {
              "Data": "",
              "Signature": "",
              "PublicKey": ""
             },
             "DataEncrypted": "BIMJVYH3z+R7h+Z8x5VTopSfNp/S3givdBPUYaSGdt3NJJf4ku4j/zYChrGQzFPZJhJRnitIiH46a1Jj7X77rrIzWsNkXxtiPw6BLaJ5j5llNBp942DEaf/DJ/ZqqcA4F1m21+qc+59tCOXR",
             "DataPlain": "Some model data",
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
              "X": 56077708495930516551724794886729315176861778376482256805300192072929262042753,
              "Y": 92206848186601142902315573422367991743236569607302785837789341238378495412122
             },
             "SignatureOK": true
            },
            "InvocationInputs": [
            ],
            "InvocationLimit": 4,
            "InvocationCount": 0,
            "Created": "2020-10-21T10:00:55.567184077Z",
            "Started": "2020-10-21T10:00:55.567228977Z"
           },
           { //2
            "ID": "Mock Agent's ID",
            "Title": "Mock Pricing Agent",
            "Description": "A 'mock' dataset to start connecting with VIS.JS",
            "OwnerName": "Acme Corp",
            "OwnerKeyPEM": "-----BEGIN PUBLIC KEY-----\nMFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAEL/Z8GX2L+9mVd9z/FgR2ewPwpudotqOF\nLKXiBKrmxRC58/3TEYxNHAx9sV1ezzzp93zXIBeLxQ10MesiZYVn5A==\n-----END PUBLIC KEY-----",
            "PriceGiverKeyPEM": "",
            "PriceGiverName": "",
            "Initialized": true,
            "ModelIntput": {
             "JsonMessage": {
              "Data": "",
              "Signature": "",
              "PublicKey": ""
             },
             "DataEncrypted": "BIMJVYH3z+R7h+Z8x5VTopSfNp/S3givdBPUYaSGdt3NJJf4ku4j/zYChrGQzFPZJhJRnitIiH46a1Jj7X77rrIzWsNkXxtiPw6BLaJ5j5llNBp942DEaf/DJ/ZqqcA4F1m21+qc+59tCOXR",
             "DataPlain": "Some model data",
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
              "X": 56077708495930516551724794886729315176861778376482256805300192072929262042753,
              "Y": 92206848186601142902315573422367991743236569607302785837789341238378495412122
             },
             "SignatureOK": true
            },
            "InvocationInputs": [
            ],
            "InvocationLimit": 4,
            "InvocationCount": 0,
            "Created": "2020-10-21T10:00:55.567184077Z",
            "Started": "2020-10-21T10:00:55.567228977Z"
           },
           { //3
            "ID": "Mock Agent's ID",
            "Title": "Mock Pricing Agent",
            "Description": "A 'mock' dataset to start connecting with VIS.JS",
            "OwnerName": "Acme Corp",
            "OwnerKeyPEM": "-----BEGIN PUBLIC KEY-----\nMFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAEL/Z8GX2L+9mVd9z/FgR2ewPwpudotqOF\nLKXiBKrmxRC58/3TEYxNHAx9sV1ezzzp93zXIBeLxQ10MesiZYVn5A==\n-----END PUBLIC KEY-----",
            "PriceGiverKeyPEM": "",
            "PriceGiverName": "",
            "Initialized": true,
            "ModelIntput": {
             "JsonMessage": {
              "Data": "",
              "Signature": "",
              "PublicKey": ""
             },
             "DataEncrypted": "BIMJVYH3z+R7h+Z8x5VTopSfNp/S3givdBPUYaSGdt3NJJf4ku4j/zYChrGQzFPZJhJRnitIiH46a1Jj7X77rrIzWsNkXxtiPw6BLaJ5j5llNBp942DEaf/DJ/ZqqcA4F1m21+qc+59tCOXR",
             "DataPlain": "Some model data",
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
              "X": 56077708495930516551724794886729315176861778376482256805300192072929262042753,
              "Y": 92206848186601142902315573422367991743236569607302785837789341238378495412122
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
              "DataEncrypted": null,
              "DataPlain": "Pricing Request No 1",
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
               "X": 21694204765116293956481059312787676891972436285734810771583021253985508443408,
               "Y": 84108972656867939550743177639539173188235556876572148255371055369462542067684
              },
              "SignatureOK": true
             }
            ],
            "InvocationLimit": 4,
            "InvocationCount": 1,
            "Created": "2020-10-21T10:00:55.567184077Z",
            "Started": "2020-10-21T10:00:55.567228977Z"
           },
           { //4
            "ID": "Mock Agent's ID",
            "Title": "Mock Pricing Agent",
            "Description": "A 'mock' dataset to start connecting with VIS.JS",
            "OwnerName": "Acme Corp",
            "OwnerKeyPEM": "-----BEGIN PUBLIC KEY-----\nMFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAEL/Z8GX2L+9mVd9z/FgR2ewPwpudotqOF\nLKXiBKrmxRC58/3TEYxNHAx9sV1ezzzp93zXIBeLxQ10MesiZYVn5A==\n-----END PUBLIC KEY-----",
            "PriceGiverKeyPEM": "",
            "PriceGiverName": "",
            "Initialized": true,
            "ModelIntput": {
             "JsonMessage": {
              "Data": "",
              "Signature": "",
              "PublicKey": ""
             },
             "DataEncrypted": "BIMJVYH3z+R7h+Z8x5VTopSfNp/S3givdBPUYaSGdt3NJJf4ku4j/zYChrGQzFPZJhJRnitIiH46a1Jj7X77rrIzWsNkXxtiPw6BLaJ5j5llNBp942DEaf/DJ/ZqqcA4F1m21+qc+59tCOXR",
             "DataPlain": "Some model data",
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
              "X": 56077708495930516551724794886729315176861778376482256805300192072929262042753,
              "Y": 92206848186601142902315573422367991743236569607302785837789341238378495412122
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
              "DataEncrypted": null,
              "DataPlain": "Pricing Request No 1",
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
               "X": 21694204765116293956481059312787676891972436285734810771583021253985508443408,
               "Y": 84108972656867939550743177639539173188235556876572148255371055369462542067684
              },
              "SignatureOK": true
             },
             {
              "JsonMessage": {
               "Data": "",
               "Signature": "",
               "PublicKey": ""
              },
              "DataEncrypted": null,
              "DataPlain": "Pricing Request No 2",
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
               "X": 21694204765116293956481059312787676891972436285734810771583021253985508443408,
               "Y": 84108972656867939550743177639539173188235556876572148255371055369462542067684
              },
              "SignatureOK": true
             }
            ],
            "InvocationLimit": 4,
            "InvocationCount": 2,
            "Created": "2020-10-21T10:00:55.567184077Z",
            "Started": "2020-10-21T10:00:55.567228977Z"
           },
           { //5
            "ID": "Mock Agent's ID",
            "Title": "Mock Pricing Agent",
            "Description": "A 'mock' dataset to start connecting with VIS.JS",
            "OwnerName": "Acme Corp",
            "OwnerKeyPEM": "-----BEGIN PUBLIC KEY-----\nMFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAEL/Z8GX2L+9mVd9z/FgR2ewPwpudotqOF\nLKXiBKrmxRC58/3TEYxNHAx9sV1ezzzp93zXIBeLxQ10MesiZYVn5A==\n-----END PUBLIC KEY-----",
            "PriceGiverKeyPEM": "",
            "PriceGiverName": "",
            "Initialized": true,
            "ModelIntput": {
             "JsonMessage": {
              "Data": "",
              "Signature": "",
              "PublicKey": ""
             },
             "DataEncrypted": "BIMJVYH3z+R7h+Z8x5VTopSfNp/S3givdBPUYaSGdt3NJJf4ku4j/zYChrGQzFPZJhJRnitIiH46a1Jj7X77rrIzWsNkXxtiPw6BLaJ5j5llNBp942DEaf/DJ/ZqqcA4F1m21+qc+59tCOXR",
             "DataPlain": "Some model data",
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
              "X": 56077708495930516551724794886729315176861778376482256805300192072929262042753,
              "Y": 92206848186601142902315573422367991743236569607302785837789341238378495412122
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
              "DataEncrypted": null,
              "DataPlain": "Pricing Request No 1",
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
               "X": 21694204765116293956481059312787676891972436285734810771583021253985508443408,
               "Y": 84108972656867939550743177639539173188235556876572148255371055369462542067684
              },
              "SignatureOK": true
             },
             {
              "JsonMessage": {
               "Data": "",
               "Signature": "",
               "PublicKey": ""
              },
              "DataEncrypted": null,
              "DataPlain": "Pricing Request No 2",
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
               "X": 21694204765116293956481059312787676891972436285734810771583021253985508443408,
               "Y": 84108972656867939550743177639539173188235556876572148255371055369462542067684
              },
              "SignatureOK": true
             },
             {
              "JsonMessage": {
               "Data": "",
               "Signature": "",
               "PublicKey": ""
              },
              "DataEncrypted": null,
              "DataPlain": "Pricing Request No 3",
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
               "X": 21694204765116293956481059312787676891972436285734810771583021253985508443408,
               "Y": 84108972656867939550743177639539173188235556876572148255371055369462542067684
              },
              "SignatureOK": true
             }
            ],
            "InvocationLimit": 4,
            "InvocationCount": 3,
            "Created": "2020-10-21T10:00:55.567184077Z",
            "Started": "2020-10-21T10:00:55.567228977Z"
           },
           { //6
            "ID": "Mock Agent's ID",
            "Title": "Mock Pricing Agent",
            "Description": "A 'mock' dataset to start connecting with VIS.JS",
            "OwnerName": "Acme Corp",
            "OwnerKeyPEM": "-----BEGIN PUBLIC KEY-----\nMFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAEL/Z8GX2L+9mVd9z/FgR2ewPwpudotqOF\nLKXiBKrmxRC58/3TEYxNHAx9sV1ezzzp93zXIBeLxQ10MesiZYVn5A==\n-----END PUBLIC KEY-----",
            "PriceGiverKeyPEM": "",
            "PriceGiverName": "",
            "Initialized": true,
            "ModelIntput": {
             "JsonMessage": {
              "Data": "",
              "Signature": "",
              "PublicKey": ""
             },
             "DataEncrypted": "BIMJVYH3z+R7h+Z8x5VTopSfNp/S3givdBPUYaSGdt3NJJf4ku4j/zYChrGQzFPZJhJRnitIiH46a1Jj7X77rrIzWsNkXxtiPw6BLaJ5j5llNBp942DEaf/DJ/ZqqcA4F1m21+qc+59tCOXR",
             "DataPlain": "Some model data",
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
              "X": 56077708495930516551724794886729315176861778376482256805300192072929262042753,
              "Y": 92206848186601142902315573422367991743236569607302785837789341238378495412122
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
              "DataEncrypted": null,
              "DataPlain": "Pricing Request No 1",
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
               "X": 21694204765116293956481059312787676891972436285734810771583021253985508443408,
               "Y": 84108972656867939550743177639539173188235556876572148255371055369462542067684
              },
              "SignatureOK": true
             },
             {
              "JsonMessage": {
               "Data": "",
               "Signature": "",
               "PublicKey": ""
              },
              "DataEncrypted": null,
              "DataPlain": "Pricing Request No 2",
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
               "X": 21694204765116293956481059312787676891972436285734810771583021253985508443408,
               "Y": 84108972656867939550743177639539173188235556876572148255371055369462542067684
              },
              "SignatureOK": true
             },
             {
              "JsonMessage": {
               "Data": "",
               "Signature": "",
               "PublicKey": ""
              },
              "DataEncrypted": null,
              "DataPlain": "Pricing Request No 3",
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
               "X": 21694204765116293956481059312787676891972436285734810771583021253985508443408,
               "Y": 84108972656867939550743177639539173188235556876572148255371055369462542067684
              },
              "SignatureOK": true
             },
             {
              "JsonMessage": {
               "Data": "",
               "Signature": "",
               "PublicKey": ""
              },
              "DataEncrypted": null,
              "DataPlain": "Pricing Request No 4",
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
               "X": 21694204765116293956481059312787676891972436285734810771583021253985508443408,
               "Y": 84108972656867939550743177639539173188235556876572148255371055369462542067684
              },
              "SignatureOK": true
             }
            ],
            "InvocationLimit": 4,
            "InvocationCount": 4,
            "Created": "2020-10-21T10:00:55.567184077Z",
            "Started": "2020-10-21T10:00:55.567228977Z"
           }
    ]



    var digital_embassy_blue =  [{ id: 29, shape: "square", color: "white", size: 1, x: 580, y: 100 },{ id: 9, label: "Pricing agent", shape: "square", color: "white", size: 1, x: 300, y: 18 },{ id: 1, label: "", shape: "square", color: "#97C2FC", size: 80, x: 300, y: 100 }]
    var digital_embassy_green = (remainingCalls) => {return  [{ id: 29, shape: "square", color: "white", size: 1, x: 580, y: 100 },{ id: 10, label: remainingCalls.toString(10), shape: "box", color: "#28B463", font: {color:(remainingCalls>0) ? 'white' : 'red'}, size: 10, x: 300, y: 100 },{ id: 9, label: "Pricing agent", shape: "square", color: "white", size: 1, x: 300, y: 18 },{ id: 1, label: "", shape: "square", color: "#28B463", size: 80, x: 300, y: 100 }]}
    var load_weights_node = (data) => { return { id: 2, label: "Load\nWeights", shape: "box", color: "#FFFF00", size: 15, x: 435, y: 100, title: data } }
    var right_tick_node = { id: 3, shape: 'icon', icon: { face: "'FontAwesome'", code: "\uf00c", size: 20, color: "green", }, borderWidth: 2, x: 580, y: 80 }
    var right_cross_node = { id: 3, shape: 'icon', icon: { face: "'FontAwesome'", code: "\uf00d", size: 20, color: "red", }, borderWidth: 2, x: 580, y: 80 }
    var right_document_node = { id: 11, shape: 'icon', icon: { face: "'FontAwesome'", code: "\uf15c", size: 40, color: "black", }, borderWidth: 2, x: 550, y: 100 }
    var left_tick_node = (numUser) => {return { id: 21+numUser, shape: 'icon', icon: { face: "'FontAwesome'", code: "\uf00c", size: 20, color: "green", }, borderWidth: 2, x: 20, y: 5 + (50*numUser) }}
    var left_cross_node = (numUser) => {return { id: 21+numUser, shape: 'icon', icon: { face: "'FontAwesome'", code: "\uf00d", size: 20, color: "red", }, borderWidth: 2, x: 20, y: 5 + (50*numUser) }}
    var left_document_node = (numUser) => {return { id: 17+numUser, shape: 'icon', icon: { face: "'FontAwesome'", code: "\uf15c", size: 40, color: "black", }, borderWidth: 2, x: 50, y: 25 + (50*numUser) }}
    var ask_pricing_node = (numUser) => { return { id: 13+numUser, label: "Ask for\npricing", shape: "box", size: 15, color: "#FFFF00", x: 165, y: 25 + (50*numUser)}} // 16
    var audit_log_node = { id: 6, label: "Audit\nlogs", shape: "square", color: "#90EE90", x: 300, y: 250 }
    var right_key_node = { id: 7, shape: 'icon', icon: { face: "'FontAwesome'", code: "\uf084", size: 30, color: "#f0a30a", }, x: 480, y: 80 }
    var left_key_node = (numUser) => {return { id: 25+numUser, shape: 'icon', icon: { face: "'FontAwesome'", code: "\uf084", size: 30, color: "#f0a30a", }, x: 120, y: 5 + (50*numUser) }}

    var nodes = new vis.DataSet([]);

    // create an array with edges
    var edges = new vis.DataSet([
      { from: 1, to: 2, color: "rgb(20,24,200)", arrows: "from" },
      { from: 1, to: 13, color: "rgb(20,24,200)", arrows: "from" },
      { from: 1, to: 14, color: "rgb(20,24,200)", arrows: "from" },
      { from: 1, to: 15, color: "rgb(20,24,200)", arrows: "from" },
      { from: 1, to: 16, color: "rgb(20,24,200)", arrows: "from" },
      {
        from: 1,
        to: 6,
        color: "rgb(20,24,200)",
        arrows: "to",
      },
      { from: 2, to: 11, color: "rgb(20,24,200)" },
      { from: 13, to: 17, color: "rgb(20,24,200)" },
      { from: 14, to: 18, color: "rgb(20,24,200)" },
      { from: 15, to: 19, color: "rgb(20,24,200)" },
      { from: 16, to: 20, color: "rgb(20,24,200)" },
    ]);

    var updateNodes = (nodes,state, prevState) => {
      //If not undefined we will have the Central node in blue unless it is already initialized
      let newPrevState = prevState
      if (state != undefined) {
        if (state["Initialized"] == true) {
          if(prevState["init"] != true){
            if(nodes.get(1) != null){
              nodes.remove([1,9,29])
            }
            newPrevState["init"] = true;
            nodes.add(digital_embassy_green(state["InvocationLimit"]-state["InvocationCount"]));
            nodes.add(load_weights_node(state["ModelIntput"]["DataPlain"]));
            if (state["ModelIntput"]["SignatureOK"] == true) {
              nodes.add(right_key_node);
              setTimeout(function() {
                nodes.add(right_document_node);
                nodes.add(right_tick_node);
                nodes.add(ask_pricing_node(0)); 
                nodes.add(ask_pricing_node(1));
                nodes.add(ask_pricing_node(2));
                nodes.add(ask_pricing_node(3));
              },3500)
            }
            else if (state["ModelIntput"]["SignatureOK"] == false) {
              nodes.add(right_key_node);
              setTimeout(function() {
                nodes.add(right_document_node);
                nodes.add(right_cross_node);
              },3500)
            }
          }
        }
        else {
          if(prevState["init"] == undefined){
            newPrevState["init"] = false;
            nodes.add(digital_embassy_blue);
          }
        }
        if (state["InvocationInputs"] != null){
          if(state["InvocationInputs"].length > prevState["numPricing"]){
            let remaining_Calls = state["InvocationLimit"]-state["InvocationCount"] 
            for(let i = prevState["numPricing"]; i < state["InvocationInputs"].length; i++){
              nodes.update({id: 13+i, title: state["InvocationInputs"][i]["DataPlain"]});
              if (state["InvocationInputs"][i]["SignatureOK"] == true) {
                nodes.add(left_key_node(i));
                setTimeout(function() {
                  nodes.add(left_document_node(i));
                  nodes.add(left_tick_node(i));
                  nodes.update({ id: 10, label: remaining_Calls.toString(10), font: {color:(remaining_Calls>0) ? 'white' : 'red'}});
                },3500)
              }
              else if (state["InvocationInputs"][i]["SignatureOK"] == false) {
                nodes.add(left_key_node(i));
                setTimeout(function() {
                  nodes.add(left_document_node(i));
                  nodes.add(left_cross_node(i));
                  nodes.update({ id: 10, label: remaining_Calls.toString(10), font: {color:(remaining_Calls>0) ? 'white' : 'red'}});
                },3500)
              }
            }
            newPrevState["numPricing"] = state["InvocationInputs"].length;
          }
        }
      }
      return newPrevState;
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
      physics: false,
      interaction: {
        dragNodes: false,// do not allow dragging nodes
        zoomView: false, // do not allow zooming
        dragView: false  // do not allow dragging
      }
    };
    var network = new vis.Network(container, data, options);
    let prevState = {
      "init": undefined,
      "numPricing": 0,
    }
    //var num = 0;

    function timeout() {
      setTimeout(function () {
        fetch('https://researchbox1.uksouth.cloudapp.azure.com/pricing/agentmock')
          .then(response => response.json())
          .then(state => {
            //state = states_test[num]
            prevState = updateNodes(nodes, state,prevState);
            var data = {
              nodes: nodes,
              edges: edges,
            };
            var network = new vis.Network(container, data, options);
          })
        //num=num+1
        timeout();
      }, 5000);
    };

    timeout()
  });

