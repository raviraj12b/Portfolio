export const profile = {
  name: 'Rajesh Borkar',
  email: 'rajeshborkar04@gmail.com',
  github: 'https://github.com/raviraj12b',
  linkedin: 'https://www.linkedin.com/in/rajeshborkar01',
  resume: './Rajesh_Borkar_Resume_2026.pdf',
};

export const projects = [
  {
    id: 'docuai', title: 'AI Document Intelligence', category: 'Generative AI',
    line: 'Ask your documents. Keep the source in sight.',
    description: 'A full-stack PDF question-answering app with semantic retrieval, source references, and navigation to the exact supporting page.',
    tags: ['React', 'FastAPI', 'FAISS', 'Groq'],
    demo: 'https://docuai-virid.vercel.app', source: 'https://github.com/raviraj12b/ai-document-intelligence',
    detail: 'Retrieve relevant document context before generating an answer, then present source references alongside it. The engineering challenge: making retrieval, generation, and source navigation work together in a usable application.',
  },
  {
    id: 'student', title: 'Student Performance Predictor', category: 'Machine learning',
    line: 'From student inputs to a score estimate.',
    description: 'An end-to-end machine learning application for estimating average exam scores from demographic and test-preparation inputs, presented through a Flask web interface.',
    tags: ['Python', 'Scikit-learn', 'Flask'],
    demo: 'https://student-performance-predictor-41op.onrender.com', source: 'https://github.com/raviraj12b/student-performance-predictor',
    detail: 'Explore exam data, prepare categorical features, compare regression models, and connect the saved pipeline to a Flask application with server-side validation. This is an exploratory modeling project: its estimates are not a complete measure of a student’s ability.',
  },
  {
    id: 'sales', title: 'Sales Forecasting', category: 'Time series',
    line: 'A good model score is only the beginning.',
    description: 'A Rossmann sales forecasting project covering data cleaning, exploration, feature engineering, model comparison, and a seven-page Streamlit dashboard.',
    tags: ['Python', 'Pandas', 'Random Forest', 'Streamlit'],
    source: 'https://github.com/raviraj12b/Sales_Forecasting',
    detail: 'Compared Linear Regression and Random Forest, checked features for leakage, and investigated recursive forecast error. Feeding predictions back as history compounded errors. The lesson: evaluate the forecast horizon and the information actually available at prediction time.',
  },
  {
    id: 'pdf', title: 'AI PDF Summarizer', category: 'Generative AI',
    line: 'More context. Less reading time.',
    description: 'Upload a PDF, choose a summarization style, and generate a Groq-powered summary. Export the result as PDF or TXT from a Streamlit interface.',
    tags: ['Python', 'Streamlit', 'Groq', 'PDF / TXT export'],
    demo: 'https://smartpdfsummarizer.streamlit.app', source: 'https://github.com/raviraj12b/pdf_summarizer',
    detail: 'Connect document upload and text extraction to LLM inference, then make the output useful outside the app with PDF and TXT export. The workflow brings document processing, a hosted model API, and a simple interface together.',
  },
  {
    id: 'aqi', title: 'AQI Forecasting', category: 'Time series',
    line: 'Yesterday’s air. Tomorrow’s question.',
    description: 'An air quality forecasting project exploring how historical environmental data can inform predictions over time.',
    tags: ['Machine learning', 'Time series', 'Data analysis'],
    source: 'https://github.com/raviraj12b/AQI-Forecast-Environmental-Analytics',
    detail: 'Explore patterns in historical air-quality data and the relationship between past observations and future predictions. The focus is understanding the forecasting problem and its evaluation, without treating a model estimate as a guaranteed outcome.',
  },
  {
    id: 'inspector', title: 'Data Health Inspector', category: 'Python tooling',
    line: 'Know your data. Before you model it.',
    description: 'A Python tool for inspecting missing values, feature statistics, skewness, outliers, and zero-variance features, with a visual dashboard and report export.',
    tags: ['Python', 'Pandas', 'Matplotlib'],
    detail: 'Checks missing values and types, summary statistics, skewness and kurtosis, IQR outliers, and zero-variance columns. A four-panel dashboard and Markdown report make findings easier to review. Scaling suggestions are heuristics to assess for each task.',
  },
];
