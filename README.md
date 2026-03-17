# DrugShield AI

## Overview

**DrugShield AI** is an intelligent healthcare prototype designed to detect **dangerous drug interactions** between medicines. The system allows users to input multiple medicines and instantly analyzes potential interactions, displaying severity levels and medical advice.

Medication errors and drug interactions are a major healthcare risk. DrugShield AI aims to help doctors, pharmacists, and patients quickly identify risky drug combinations and avoid harmful side effects.

---

## Problem Statement

Patients often take multiple medicines simultaneously, which can lead to harmful drug interactions.

Key issues include:

* Doctors may not instantly remember all possible drug interactions
* Dangerous combinations can cause severe side effects
* Existing tools are slow, complex, or not easily accessible

### Impact

* Increased hospitalizations
* Higher healthcare costs
* Serious risk to patient safety

---

## Solution

DrugShield AI provides a **fast and simple system** to check drug interactions.

Users can enter multiple medicine names, and the system automatically analyzes all combinations to detect potential interactions and classify them as:

* 🟢 Safe
* 🟡 Moderate Risk
* 🔴 Dangerous

The system also provides **effect descriptions and medical advice**.

---

## Features

* Multi-drug interaction detection
* Dynamic medicine input fields (Add / Remove medicines)
* Autocomplete suggestions for drug names
* Risk classification (Safe / Moderate / Dangerous)
* Clear result cards showing interaction details
* Simple and user-friendly interface

---

## How It Works

1. User enters two or more medicine names.
2. The system analyzes all pairwise drug combinations.
3. The backend checks a drug interaction dataset.
4. The system returns:

   * Interaction severity
   * Possible effect
   * Medical advice
5. Results are displayed in an easy-to-read format.

---

## System Architecture

Frontend → Sends medicine names
Backend → Processes drug combinations
Dataset → Checks known drug interactions
Frontend → Displays severity and advice

---

## Tech Stack

### Frontend

* HTML
* CSS
* JavaScript
* React

### Backend

* Python
* Flask

### Libraries

* Axios
* React Hooks

---

## Project Structure

```
DrugShield_AI
│
├── Backend
│   ├── app.py
│   └── drug_interactions.csv
│
├── Frontend
│   ├── public
│   │   ├── index.html
│   │   └── favicon.ico
│   │
│   └── src
│       ├── App.js
│       ├── App.css
│       ├── drugs.js
│       └── index.js
│
└── README.md
```

---

## How to Run the Project

### Start Backend

Navigate to backend folder:

```
cd Backend
```

Install dependencies:

```
pip install flask flask-cors pandas
```

Run server:

```
python app.py
```

Backend will run at:

```
http://127.0.0.1:5000
```

---

### Start Frontend

Navigate to frontend folder:

```
cd Frontend
```

Install dependencies:

```
npm install
```

Run React application:

```
npm start
```

Frontend will run at:

```
http://localhost:3000
```

---

## Example Input

User enters:

```
Aspirin
Warfarin
Ibuprofen
```

System output:

```
Aspirin + Warfarin → Dangerous
Aspirin + Ibuprofen → Moderate
Warfarin + Ibuprofen → Dangerous
```

---

## Future Improvements

* AI-based drug interaction prediction
* Prescription image scanning using computer vision
* Integration with hospital databases
* Mobile application support
* Voice-based medicine input

---

## Authors

Developed as a hackathon prototype.

Project: **DrugShield AI**

---

## License

This project is created for educational and hackathon purposes.
