<template>
  <div id="query">
    <p class="qHead">Create Your Own Query!</p>
    <p class="pQuery">TableName: 
      <select class="form-control tableEntry" name="tablename" v-model="selected">
          <option v-for="(table, index) in tables" :key="index" v-bind:value="table">
            {{ table.name }}
          </option>
      </select>
    </p>
    <vue-query-builder :rules="rules" v-model="query"></vue-query-builder>

    <div class="btnGen">
      <button class="buttonGenerate buttonGenerateDef" v-on:click="show">Generate Query</button>
    </div>

    <modal name="query">
      <pre>{{ JSON.stringify(this.query, null, 2) }}</pre>
      <div class="modalCloseDiv">
        <router-link to="/"><button class="buttonGenerate buttonGenerateDef modalClose queryBtn">Run</button></router-link>
        <button class="buttonGenerate buttonGenerateDef modalClose queryBtn" v-on:click="hide">Close</button>
      </div>
    </modal>
  </div>
</template>

<script>
import VueQueryBuilder from "vue-query-builder";
import VueSlideBar from "vue-slide-bar";

export default {
  name: "query",
  components: {
    VueQueryBuilder,
  },

  methods: {
    show: function() {
      this.$modal.show('query');
    },

    hide: function() {
      this.$modal.hide('query');
    }
  },

  data() {
    return {
      tables: [
        { name: "Orders" }
      ],

      selected: { name: "Orders" },
      
      rules: [
        {
          type: "numeric",
          id: "orderID",
          label: "Order ID"
        },
        {
          type: "numeric",
          id: "productID",
          label: "Product ID"
        },
        {
          type: "text",
          id: "productName",
          label: "Product Name"
        },
        {
          type: "text",
          id: "customerID",
          label: "Customer ID"
        },
        {
          type: "numeric",
          id: "employeeID",
          label: "Employee ID"
        },
        {
          type: "text",
          id: "orderDate",
          label: "Order Date"
        },
        {
          type: "text",
          id: "requiredDate",
          label: "Required Date"
        },
        {
          type: "text",
          id: "shippedDate",
          label: "Shipped Date"
        },
        {
          type: "numeric",
          id: "shipVia",
          label: "Ship Via"
        },
        {
          type: "numeric",
          id: "freight",
          label: "Freight"
        },
        {
          type: "text",
          id: "shipName",
          label: "Ship Name"
        },
        {
          type: "text",
          id: "shipAddress",
          label: "Ship Address"
        },
        {
          type: "text",
          id: "shipCity",
          label: "Ship City"
        },
        {
          type: "text",
          id: "shipRegion",
          label: "Ship Region"
        },
        {
          type: "numeric",
          id: "shipPostalCode",
          label: "Ship PostalCode"
        },
        {
          type: "text",
          id: "shipCountry",
          label: "Ship Country"
        },
        {
          type: "numeric",
          id: "unitPrice",
          label: "Unit Price"
        },
        {
          type: "custom-component",
          id: "quantity",
          label: "Quantity",
          operators: ["="],
          component: VueSlideBar,
          default: 50
        },
        {
          type: "numeric",
          id: "discount",
          label: "Discount"
        }
      ],

      query: {
        "logicalOperator": "All",
        "children": [
          {
            "type": "query-builder-rule",
            "query": {
              "rule": "orderID",
              "selectedOperator": ">",
              "selectedOperand": "Order ID",
              "value": "10"
            }
          },
          {
            "type": "query-builder-rule",
            "query": {
              "rule": "productName",
              "selectedOperator": "begins with",
              "selectedOperand": "Product Name",
              "value": "abcd"
            }
          },
          {
            "type": "query-builder-group",
            "query": {
              "logicalOperator": "All",
              "children": [
                {
                  "type": "query-builder-rule",
                  "query": {
                    "rule": "quantity",
                    "selectedOperator": "=",
                    "selectedOperand": "Quantity",
                    "value": 40
                  }
                }
              ]
            }
          }
        ]
      }
    };
  }
};
</script>

<style>
</style>