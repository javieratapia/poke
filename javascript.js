$(function (){
    $("#boton").on("click",function(event){
        event.preventDefault();
        

        var ident = $("#pokemon").val();
        $(".poke_name").empty();
        $(".poke_info").empty();

            $.ajax({
                url: `http://pokeapi.co/api/v2/pokemon/${ident}`}).done(function(pokemon){
       
                console.log(pokemon);
                $(".poke_name").text(pokemon.name);
                $("#imagen").prop("src", `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ident}.png`)
                
                
               // window.onload = function () {
 
                    //Better to construct options first and then pass it as a parameter
                    var options = {
                        animationEnabled: true,
                        title: {
                            text: "Estadísticas",                
                            fontColor: "#3c5aa6"
                        },	
                        axisY: {
                            tickThickness: 0,
                            lineThickness: 0,
                            valueFormatString: " ",
                            gridThickness: 0                    
                        },
                        axisX: {
                            tickThickness: 0,
                            lineThickness: 0,
                            labelFontSize: 18,
                            labelFontColor: "#3c5aa6"				
                        },
                        data: [{
                            indexLabelFontSize: 26,
                                  toolTipContent: "<span style=\"color:#ffcb05\">{indexLabel}:</span> <span style=\"color:#ffcb05\"><strong>{y}</strong></span>",
                            indexLabelPlacement: "inside",
                            indexLabelFontColor: "white",
                            indexLabelFontWeight: 600,
                            indexLabelFontFamily: "Verdana",
                            color: "#ffcb05",
                            type: "bar",
                            dataPoints: [
                                { y: pokemon.stats[0].base_stat, label: pokemon.stats[0].stat.name, indexLabel: "" },
                                { y: pokemon.stats[1].base_stat, label: pokemon.stats[1].stat.name, indexLabel: "" },
                                { y: pokemon.stats[2].base_stat, label: pokemon.stats[2].stat.name, indexLabel: "" },
                                { y: pokemon.stats[3].base_stat, label: pokemon.stats[3].stat.name, indexLabel: "" },
                                { y: pokemon.stats[4].base_stat, label: pokemon.stats[4].stat.name, indexLabel: "" },
                                { y: pokemon.stats[5].base_stat, label: pokemon.stats[5].stat.name, indexLabel: "" },

                            ]
                        }]
                    };
                     
                    $("#chartContainer").CanvasJSChart(options);
                    }                   
                /*
                $("#chartContainer").CanvasJSChart({
                    title:{
                        text: "Estadísticas"
                    },
                    data: [{
                        type: "column", //change type to bar, line, area, pie, etc
                        //indexLabel: "{y}", //Shows y value on all Data Points
                        indexLabelFontColor: "#5A5757",
                        indexLabelFontSize: 16,
                        indexLabelPlacement: "outside",
                        dataPoints: [
                            { label: pokemon.stats[0].stat.name, y: pokemon.stats[0].base_stat }, 
                            { label: pokemon.stats[1].stat.name, y: pokemon.stats[1].base_stat }, 
                            { label: pokemon.stats[2].stat.name, y: pokemon.stats[2].base_stat }, 
                            { label: pokemon.stats[3].stat.name, y: pokemon.stats[3].base_stat }, 
                            { label: pokemon.stats[4].stat.name, y: pokemon.stats[4].base_stat }, 
                            { label: pokemon.stats[5].stat.name, y: pokemon.stats[5].base_stat }, 
                        ]
                         }]
                    });*/
                
                
                
            //}
           ); 


    });
});