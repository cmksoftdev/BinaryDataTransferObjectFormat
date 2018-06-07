// BinaryDataTransferObject.js
// Copyright CMK Software Development 2018

class BinaryDataTransferObject {

    constructor(bdto) {
        this.e1 = "This is not a BinaryDataTransferObject";
        if (typeof(bdto) === "string") {
            this.bdto = bdto;
        } else {
            throw this.e1;
        }
    }

    GetIntFromChars (c1, c2, c3, c4) {
        var integer = this.bdto.charCodeAt(0);
        integer += this.bdto.charCodeAt(1) * 256;
        integer += this.bdto.charCodeAt(2) * 65536;
        integer += this.bdto.charCodeAt(3) * 16777216;
        return integer;
    }

    ConvertToArray() {
        // Check if 
        if (this.bdto.length <= 4) {
            throw this.e1;
        } else {
            var hdr_length = this.GetIntFromChars(
                this.bdto.charCodeAt(0),
                this.bdto.charCodeAt(1),
                this.bdto.charCodeAt(2),
                this.bdto.charCodeAt(3));
            var omd_count = this.GetIntFromChars(
                this.bdto.charCodeAt(4),
                this.bdto.charCodeAt(5),
                this.bdto.charCodeAt(6),
                this.bdto.charCodeAt(7));
            let index = 8;
            let omdAddresses = [];
            for (let i = 0; i < hdr_length; i++) {
                omdAddresses.push(this.GetIntFromChars(
                    this.bdto.charCodeAt(index),
                    this.bdto.charCodeAt(index + 1),
                    this.bdto.charCodeAt(index + 2),
                    this.bdto.charCodeAt(index + 3)));
                index += 4;
            }
        }
    }
}