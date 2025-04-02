from fastapi import FastAPI
from pydantic import BaseModel
import os
from dotenv import load_dotenv
import google.generativeai as genai
from utils import load_models, predict

app = FastAPI()
load_dotenv()

# Load ML models
model_cycle, model_ovulation = load_models()

# Configure Gemini API
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

class UserInput(BaseModel):
    number_of_peak: int
    Age: int
    Length_of_cycle: int
    Length_of_Leutal_Phase: int
    Length_of_menses: int
    Unusual_Bleeding: str  # "yes", "no", "No"
    Height: str
    Weight: float
    BMI: float
    Mean_of_length_of_cycle: int
    Menses_score: float

@app.post("/predict")
async def predict_cycle(input: UserInput):
    input_data = input.dict()
    predictions = predict(model_cycle, model_ovulation, input_data)
    
    # Generate health suggestion using Gemini API
    prompt = f"Provide health suggestions for a woman with the following menstrual cycle data: {input_data}"
    model = genai.GenerativeModel("gemini-pro")
    response = model.generate_content(prompt)
    health_suggestion = response.text
    
    return {
        "predictions": predictions,
        "health_suggestion": health_suggestion
    }

@app.get("/")
async def root():
    return {"message": "Welcome to the Menstrual Cycle Prediction API"}