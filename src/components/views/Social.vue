<template>
  <div id="social">
    <p class="sHead">Already Comfortable with SQL? Write your Query here!</p>
    <div class="mainBox">
      <div class="socialBox">
        <div contenteditable="true" data-text="Your query goes here.." class="textSocial" id="textSoc" ref="queryText" v-on:keyup.space="highlight" v-on:keyup.alt.k="saveQuery" v-on:keyup.esc="clearText" v-on:keyup.enter="runQuery">
        </div>
        <div class="btnGen btnTop flexChange">
          <div class="flexStyle">
            <div class="flexDiv">
              <button class="buttonGenerate buttonGenerateDef modalClose queryBtn" v-on:click="runQuery">Execute Query!</button>
            </div>
            <div class="pQuery">
              <p class="pLink" v-on:click="saveQuery">Save</p>
              <p class="pLink pLinkRight" v-on:click="show">Previous</p>
            </div>
          </div>
          <div>
            <tile v-if="isLoading"></tile>
          </div>
        </div>
      </div>
      <div class="dataBox">
        <p class="dbHead">Database</p>
        <table>
          <tr>
            <th>TableName</th>
            <th>Records</th>
          </tr>
          <tr v-on:click="showCols">
            <td class="tablePoint" >{{ tablename }}</td>
            <td>{{ records }}</td>
          </tr>
        </table>
      </div>
    </div>
    <modal class="queryResults" name="results">
      <div v-if="queries.length">
        <p v-for="(query, index) in queries" :key="index">
          <span class="pQuery pSaved" v-on:click="copyQuery(index)">{{query}}</span>
          <span class="pSpan" v-on:click="removeQuery(index)">x</span>
        </p>
      </div>
      <div v-else>
        <p><span class="pQuery pSaved">No Queries saved</span></p>
      </div>
      <div class="modalCloseDiv cls">
        <button class="buttonGenerate buttonGenerateDef modalClose" v-on:click="hide">Close</button>
      </div>
    </modal>

    <modal class="queryResults" name="tableCols">
      <p class="tableCols">Table Details</p>
      <ul class="ulCols">
        <li class="liCols" v-for="(col, index) in tablecols" :key="index">{{ index+1 }} - {{ col }}</li>
      </ul>
      <div class="modalCloseDiv cls">
        <button class="buttonGenerate buttonGenerateDef modalClose" v-on:click="hideCols">Close</button>
      </div>
    </modal>

    <div id="querydata">
      <v-client-table :data="data" :columns="columns" :options="options"></v-client-table>
    </div>
    <div class="downloadBtn">
      <button class="buttonGenerate buttonGenerateDef modalClose downBtn">
        <download-csv :data="data">Export to CSV</download-csv>
      </button>
      <button class="buttonGenerate buttonGenerateDef modalClose downBtn">
        <download-excel :data="data">Export to Excel</download-excel>
      </button>
    </div>
  </div>
</template>

<script>
import datastore from "../../assets/data/DataStore.json";

export default {
  name: "social",
  components: {
  },

  methods: {
    runQuery: function() {
      this.isLoading = true;
      setTimeout(()=>{
        this.isLoading = false;
        document.querySelector('#querydata').scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 3000);
    },

    copyQuery: function(index) {
      this.$refs.queryText.innerHTML = this.queries[index];
      this.hide();
      this.highlight();
    },

    removeQuery: function(index) {
      this.queries.splice(index, 1);
      localStorage.setItem("savedQueries", JSON.stringify(this.queries));
    },

    saveQuery: function() {
      if(this.$refs.queryText.textContent!='') {
        this.queries.push(this.$refs.queryText.textContent);
        localStorage.setItem("savedQueries", JSON.stringify(this.queries));
        this.show();
      }
    },

    show: function() {
      this.$modal.show('results');
    },

    showCols: function() {
      this.$modal.show('tableCols');
    },

    hide: function() {
      this.$modal.hide('results');
    },

    hideCols: function() {
      this.$modal.hide('tableCols');
    },

    highlight: function() {
      var newHTML = '';
      var text = this.$refs.queryText.textContent.replace(/[\s]+/g, " ").trim().split(' ');
      for(var i=0; i<text.length; i++) {
        if(text[i].toUpperCase()== "SELECT" || text[i].toUpperCase()== "UPDATE" || text[i].toUpperCase()== "FROM"|| text[i].toUpperCase()== "WHERE"|| text[i].toUpperCase()== "LIKE"|| text[i].toUpperCase()== "BETWEEN"|| text[i].toUpperCase()== "NOT LIKE"|| text[i].toUpperCase()== "FALSE"|| text[i].toUpperCase()== "NULL"|| text[i].toUpperCase()== "FROM"|| text[i].toUpperCase()== "TRUE"|| text[i].toUpperCase()== "NOT IN" || text[i].toUpperCase()== "AND" || text[i].toUpperCase()== "OR" || text[i].toUpperCase()== "ORDERS" || text[i].toUpperCase()== "DELETE") {
          newHTML += "<span class='highlightText'>" + text[i] + "&nbsp;</span>";
        }
        else {
          newHTML += "<span class='other'>" + text[i] + "&nbsp;</span>";
        }
        this.$refs.queryText.innerHTML = newHTML;
      }
      
      var range, selection;
      const contentEditableElement = document.getElementById('textSoc');
      range = document.createRange();
      range.selectNodeContents(contentEditableElement);
      range.collapse(false);
      selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
    },

    clearText: function() {
      this.$refs.queryText.innerHTML = '';
    }
  },

  created: function () {
      datastore.forEach(record => {
        record['shipDetails'] = record.shipAddress + ', ' + record.shipCity + ', ' + record.shipRegion + ', ' + record.shipCountry + ' - ' + record.shipPostalCode;
        this.data.push(record)
      });
      if(localStorage.getItem('savedQueries')) {
        this.queries = JSON.parse(localStorage.getItem('savedQueries'));
      }
  },

  mounted: function() {
    const inputs = document.getElementsByClassName("form-control");
    for(var i=0; i<inputs.length; i++) {
      inputs[i].placeholder = "Filter";
    }
  },

  data() {
    return {
      data: [],
      isLoading: false,
      queries: [],
      text: '',
      tablename: 'Orders',
      records: 830,
      tablecols: ['orderID', 'productID', 'productName', 'customerID', 'employeeID', 'orderDate', 'requiredDate', 'shippedDate', 'shipVia', 'freight', 'shipName', 'shipAddress', 'shipCity', 'shipRegion', 'shipPostalCode', 'shipDetails', 'shipCountry', 'unitPrice', 'quantity', 'discount'],
      columns: ['orderID', 'productID', 'productName', 'customerID', 'employeeID', 'orderDate', 'shippedDate', 'freight', 'shipDetails', 'unitPrice', 'quantity', 'discount'],
      options: {
        dateColumns: [''],
        dateFormat: 'YYYY-MM-DD',
        filterByColumn: true,
        perPage: 10,
        filterable: ['orderID', 'productID', 'productName', 'customerID', 'employeeID', 'orderDate', 'shippedDate', 'freight', 'shipDetails', 'unitPrice', 'quantity', 'discount'],
        headings: {
          orderID: 'ID',
          productID: 'PID',
          productName: 'Product',
          customerID: 'Customer Code',
          employeeID: 'Employee ID',
          orderDate: 'Ordering Date',
          shippedDate: 'Shipping Date',
          shipDetails: 'Shipping Details',
          shipCountry: 'Country',
          unitPrice: 'Price',
        },
        datepickerOptions: {
            showDropdowns: true,
            autoUpdateInput: true,
        },
      }
    };
  }
};
</script>

<style>
.previous {
  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.14), 0 1px 0px 0 rgba(0, 0, 0, 0.12), 0 2px 1px -2px rgba(0, 0, 0, 0.2) !important;
  margin: 10px 20px 30px 20px;
  border: 1px solid #ddd;
  padding: 15px 20px;
}

.previous p {
  margin-bottom: 5px;
  text-transform: capitalize;
  cursor: pointer;
}

.queryResults p {
  padding: 10px 40px 0px 30px !important;
  text-transform: capitalize;
  cursor: pointer;
  display: flex;
}

.cls {
  padding-top: 10px !important;
}

.btnTop {
  flex-direction: column;
  align-items: center;
}

.pQuery {
  display: flex;
}

.pLink {
  font-size: 12px;
  color: #1e80ed;
  padding-top: 2px;
  cursor: pointer;
}

.pLinkRight {
  padding-left: 10px;
}

.pQuery {
  display: flex;
  flex: 1;
}

.pSpan {
  color: #ff0000;
  font-size: 13px;
  font-weight: 600;
}

.sHead {
    margin-bottom: 30px;
    font-size: 18px;
    font-weight: 600;
    color: #1e80ed;
    text-align: center;
}

.spinner {
  margin: 5px auto !important;
  width: 50px !important;
  height: 25px !important;
  font-size: 8px !important;
}

.spinner>div[data-v-ae580a66] {
  width: 4px !important;
  background-color: #FF5144 !important;
}

.flexChange {
  display: flex;
  flex-direction: row;
}

.flexStyle {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 8px;
}

.flexDiv {
  display: flex;
}

.tablePoint {
  cursor: pointer;
}

.ulCols {
    width: 50%;
    list-style-type: none;
    margin-top: 15px;
    padding: 10px 30px 10px 30px;
    margin-left: 25%;
    background: #fafafa;
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;

}

.liCols {
  padding: 3px 20px;
  font-size: 13px;
}

.tableCols {
  color: #1e80ed;
  margin: 10px 0px;
  text-align: center;
  justify-content: center;
  font-size: 18px;
}
</style>