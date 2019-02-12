<template>
  <div class="about">
    <p class="qHeadAbout">About</p>
    <p>This is the SocialCops Data App v1.0.0</p>
    <p>
      <b>SocialData</b> is a Vue based web application that has been developed with the aim of easing out work of data analysts by simplifying the way they can query data from the database and get results. The platform has been built in such a way that a technical person who is well versed in writing SQL queries can use the sql query editor to directly write his/her queries and execute them to get results from the database. Also the ones who ain't comfortable in writing SQL queries have the option of creating their own queries using a simple system which helps them create a query from the user interface. 
    </p>

    <p>
      For the first case, where the analyst is well versed in writing SQL queries, the following features have been implemented to ease out the work of the analysts and enhance their experience:
    </p>

    <p>
      <b>Query Syntax Highlighting:</b> TQuery Syntax Highlighting: The most important feature that enhances the experience of a person who writes in his/her query is syntax highlighting. I have developed a small text editor wherein people can write their query and as they write it, the text editor highlights the syntax based on the keyword input, henceforth making it easy for them to read the query. 
    </p>
    
    <p>
      <b>Schema Reference: </b>Also for reference, I've added the Database details to the right of text editor mentioning the tables and corresponding length of records. When a person clicks the tablename, it gives the entire schema details of the corresponding table clicked which a person can refer to while writing the query. 
    </p>

    <p>
      <b>Text Editor Shortcuts:</b> The text editor which I developed that features syntax highlighting is also enritched with keyboard shortcuts. I've added keyboard shortcuts like Esc to clear text in the input, Enter to execute the query, Alt+k to save the frequently used queries. 
    </p>

    <p>
      <b>Save/Remove Frequently Used Queries:</b> I have also provided an option to save a frequently used query in a stack so that a person coming for the next time can directly check the stack and select the query without typing it again each time. Also, if at any point he feels he doesn't need them, he can pop it from the stack there and then. 
    </p>

    <p>
      <b>Loader while Fetching Data:</b> I have used a dummy Data Store for fetching the results. I have added a Tile loader that pops up as a query is being sent and pertains till results are being fetched(for demo purpose the loader pertains for 3 seconds). Once the data is fetched, the page automatically scrolls down smoothly to the table containing all the data being returned by the execution of entered query. 
    </p>

    <p>
      <b>Data Table:</b> To enhace the ease of data visualization for the analyst, I am storing all the results returned by the execution of entered query in a data table that features functions like sorting the table based on columns, individual column filtering, pagination etc. I have also provided the options to export the returned data to a CSV and Excel in a click. 
    </p>

    <p>
      For the second case, where the analyst is not comfortable writing SQL queries, the following features have been implemented to ease out the work of the analysts and enhance their experience:
    </p>

    <p>
      <b>Create Query using UI:</b> Firstly, they get an option to select the table over which they want to query. Then, I have provided 2 options in layman terms: ALL and ANY which in technical term mean AND and OR respectively. The analyst selects whether he wants to execute an AND or OR query. Then he gets the option of selecting the column from the dropdown over which he wants to put a condition. He can then either add a rule or add a group. I have added a sample query by default when page loads for an understanding of add/remove rule and group. A person can modify the default query in UI and make his own query using the interface. 
    </p>

    <p>
      For each column, I have already added their data type. For example if it is a Text column like Product Name, the field type will be Text and the conditions that can be queried will be 'Equals' 'Contains', 'Begins with' etc. If it is a numeric column like orderID, the conditions  that can be queried will be '=', '>', '>=' etc. Apart from them, I have also added a custom field type for quantity which is a <b>Slider</b> where a person can select the quantity by adjusting the slider. 
    </p>

    <p>
      Adding a rule or rule group helps the person to add complex conditions to their query. Once all the conditions are added, hitting generate button will convert the selected conditions to a JSON format which can be passed to server side for processing so as to convert it to a query based on the object as it contains all the relevant fields in an object format including all and/or operations on multiple condition which can be easily parsed on server side and a query can be generated. Once generated, the user is redirected to landing page and the table is updated with the results obtained by the query. Also we can populate the query editor on the landing page so that user can store the query for future use case. The query generation by json so passed is based on the assumption that analysts cannot alter the database, so only view query is what they can execute. 
    </p>
  </div>
</template>
