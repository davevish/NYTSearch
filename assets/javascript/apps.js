<!DOCUMENT html>
<html>
    <body>
        <div>
            <p>Search Term</p>  
            <input id="search_term"> 
        </div>
        <div>
            <p>number of records to retrieve</p>
            <ul><li>3</li><li>5</li><li>10</li></ul>
        </div>
        <div>
            <p>Start Year</p>
             <input id="start_year"> 
        </div>
        <div>
            <p>End Year</p>
             <input id="end_year"> 
        </div>
<script>
apiKey=77f48b387178457cb9aa0b681f9268e0;
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apiKey + "&q=";

$.ajax({
url = queryURL,
method = "GET"
}).done(function(response){
    var qTerm = "";
    var starYr= 0;
    var endYr=0;
    //ID search_term = #searchTerm
    //ID search button = #search

$("#...").on("click",function(event){
    var qterm = $("#searchTerm").val();
    var 

}


});
</script>
        
    </body>
</html>





