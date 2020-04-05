const db = require("../models");

module.exports = function(app) {

    
    app.get("/api/workouts", (_, res) => {
        db.Workout.find({})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
    });
    
    
    app.post("/api/workouts", async (_, res) => {
        try{
            const response = await db.Workout.create({type: "workout"})
            res.json(response);
        }
        catch(err){
            console.log("error occurred creating a workout: ", err)
        }
    })

    

    app.put("/api/workouts/:id", ({body, params}, res) => {
       
        const id = params.id;
        let previousExercises = [];

        // gets all the currently saved exercises in the current workout
        db.Workout.find({_id: id})
            .then(dbWorkout => {
                // console.log(dbWorkout)
                prevoiusExercises = dbWorkout[0].exercises;
                res.json(dbWorkout[0].exercises);
                let allExercises = [...previousExercises, body]
                console.log(allExercises)
                updateWorkout(allExercises)
            })
            .catch(err => {
                res.json(err);
            });

        function updateWorkout(exercises){
            db.Workout.findByIdAndUpdate(id, {exercises: exercises}, (err, _) => {
            if(err){
                console.log(err)
            }

            })
        }
            
    })


    app.get("/api/workouts/range", (_, res) => {
        db.Workout.find({})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
    }); 
};