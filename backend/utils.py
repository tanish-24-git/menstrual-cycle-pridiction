import pickle
import pandas as pd

def load_models():
    with open("model_cycle.pkl", "rb") as f:
        model_cycle = pickle.load(f)
    with open("model_ovulation.pkl", "rb") as f:
        model_ovulation = pickle.load(f)
    return model_cycle, model_ovulation

def preprocess_input(data: dict):
    # Convert input data to DataFrame
    df = pd.DataFrame([data])
    # One-hot encode categorical variables (Unusual_Bleeding, Height)
    df = pd.get_dummies(df, columns=["Unusual_Bleeding", "Height"], drop_first=True)
    return df

def predict(model_cycle, model_ovulation, input_data):
    processed_data = preprocess_input(input_data)
    cycle_length = model_cycle.predict(processed_data)[0]
    ovulation_day = model_ovulation.predict(processed_data)[0]
    return {"cycle_length": cycle_length, "ovulation_day": ovulation_day}