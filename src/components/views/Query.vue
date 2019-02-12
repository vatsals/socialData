<template>
  <div id="query">
    <p class="qHead">Create Your Own Query!</p>
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
      rules: [
        {
          type: "text",
          id: "orderID",
          label: "Order ID"
        },
        {
          type: "text",
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
          type: "text",
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
          type: "text",
          id: "shipVia",
          label: "Ship Via"
        },
        {
          type: "text",
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
          type: "text",
          id: "shipPostalCode",
          label: "Ship PostalCode"
        },
        {
          type: "text",
          id: "shipCountry",
          label: "Ship Country"
        },
        {
          type: "text",
          id: "unitPrice",
          label: "Unit Price"
        },
        {
          type: "text",
          id: "quantity",
          label: "Quantity"
        },
        {
          type: "text",
          id: "discount",
          label: "Discount"
        },
        {
          type: "radio",
          id: "fruit",
          label: "Fruit",
          choices: [
            { label: "Apple", value: "apple" },
            { label: "Banana", value: "banana" }
          ]
        }
      ],

      query: {
        "logicalOperator": "All",
        "children": [
          {
            "type": "query-builder-group",
            "query": {
              "logicalOperator": "Any",
              "children": [
                {
                  "type": "query-builder-rule",
                  "query": {
                    "rule": "productName",
                    "selectedOperator": "contains",
                    "selectedOperand": "productName",
                    "value": null
                  }
                },
                {
                  "type": "query-builder-rule",
                  "query": {
                    "rule": "fruit",
                    "selectedOperand": "Fruit",
                    "value": "banana"
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