from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from pathlib import Path
from xml.sax.saxutils import escape

out = Path(__file__).resolve().parents[1] / 'public/Rajesh_Borkar_Resume_2026.pdf'
pdfmetrics.registerFont(TTFont('DejaVu', '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'))
pdfmetrics.registerFont(TTFont('DejaVu-Bold', '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'))
pdfmetrics.registerFontFamily('DejaVu', normal='DejaVu', bold='DejaVu-Bold')
navy=colors.HexColor('#101a32');muted=colors.HexColor('#526077');blue=colors.HexColor('#31549a')
doc=SimpleDocTemplate(str(out), pagesize=A4, rightMargin=18*mm, leftMargin=18*mm, topMargin=16*mm, bottomMargin=15*mm,
    title='Rajesh Borkar Resume', author='Rajesh Borkar', subject='Artificial Intelligence and Machine Learning Resume')
styles={
'name':ParagraphStyle('Name',fontName='DejaVu-Bold',fontSize=19,leading=24,textColor=navy,spaceAfter=3),
'role':ParagraphStyle('Role',fontName='DejaVu',fontSize=9,leading=13,textColor=muted,spaceAfter=5),
'contact':ParagraphStyle('Contact',fontName='DejaVu',fontSize=7.9,leading=13,textColor=navy,spaceAfter=8),
'section':ParagraphStyle('Section',fontName='DejaVu-Bold',fontSize=9,leading=12,textColor=blue,spaceBefore=9,spaceAfter=5),
'body':ParagraphStyle('Body',fontName='DejaVu',fontSize=8.3,leading=12.2,textColor=navy,spaceAfter=3),
'bullet':ParagraphStyle('Bullet',fontName='DejaVu',fontSize=8.1,leading=11.7,textColor=navy,leftIndent=10,firstLineIndent=-9,spaceAfter=2),
'job':ParagraphStyle('Job',fontName='DejaVu-Bold',fontSize=8.6,leading=12.5,textColor=navy),
'date':ParagraphStyle('Date',fontName='DejaVu',fontSize=8,leading=12.5,textColor=muted,alignment=2),
'org':ParagraphStyle('Org',fontName='DejaVu',fontSize=8.1,leading=12.5,textColor=muted,spaceAfter=3),
'project':ParagraphStyle('Project',fontName='DejaVu-Bold',fontSize=8.3,leading=12,textColor=navy,spaceBefore=4),
}
def para(s,style='body'):return Paragraph(s,styles[style])
def heading(s):return para(escape(s),'section')
def bullet(s):return para('•  '+s,'bullet')
def job(title,date,org,points):
    row=Table([[para(escape(title),'job'),para(escape(date),'date')]],colWidths=[112*mm,62*mm])
    row.setStyle(TableStyle([('VALIGN',(0,0),(-1,-1),'TOP'),('LEFTPADDING',(0,0),(-1,-1),0),('RIGHTPADDING',(0,0),(-1,-1),0),('TOPPADDING',(0,0),(-1,-1),0),('BOTTOMPADDING',(0,0),(-1,-1),0)]))
    return [row,para(escape(org),'org')]+[bullet(x) for x in points]
story=[para('RAJESH BORKAR','name'),para('Final-year B.E. student · Artificial Intelligence &amp; Data Science','role'),
para('Pune, Maharashtra  |  +91 7420887465  |  <link href="mailto:rajeshborkar04@gmail.com" color="#31549a">rajeshborkar04@gmail.com</link><br/><link href="https://github.com/raviraj12b" color="#31549a">github.com/raviraj12b</link>  |  <link href="https://www.linkedin.com/in/rajeshborkar01" color="#31549a">linkedin.com/in/rajeshborkar01</link>','contact'),
heading('PROFILE'),
para('AI &amp; Data Science student with hands-on work in machine learning, document intelligence, and software applications. Built forecasting pipelines, a PDF question-answering application, and deployed predictive tools. Interested in AI/ML engineering and data-focused software roles.'),
heading('EXPERIENCE')]
story+=job('Machine Learning Intern','12 Jul – 06 Sep 2026','Codtech IT Solutions Private Limited  |  Remote',[
'Built a Rossmann sales forecasting pipeline covering retail data cleaning, time-series features, model comparison, and a seven-page Streamlit dashboard.',
'Audited features for leakage and compared Linear Regression and Random Forest using diagnostic plots and error metrics.',
'Identified recursive prediction error accumulation and revised backtesting to use frozen history; documented the evaluation trade-off.'
])
story+=job('AI Engineer Intern','22 Dec 2025 – 31 Jan 2026','TechGeekConnect Technologies LLP',[
'Worked on an AI web application using Python, React.js, generative AI, LLMs, and Streamlit during a six-week internship.',
'Practised application development and collaboration across the AI and web stack.'
])
story += [heading('SELECTED PROJECTS')]
story += [para('DOCUAI · Document Intelligence  |  <link href="https://docuai-virid.vercel.app" color="#31549a">Live demo</link>  ·  <link href="https://github.com/raviraj12b/ai-document-intelligence" color="#31549a">Code</link>','project'),
para('Full-stack PDF question-answering application using React, FastAPI, FAISS, and Groq. Supports document-specific questions, cited answers, and navigation to source pages.'),
para('Student Performance Predictor  |  <link href="https://student-performance-predictor-41op.onrender.com" color="#31549a">Live demo</link>  ·  <link href="https://github.com/raviraj12b/student-performance-predictor" color="#31549a">Code</link>','project'),
para('Built a Scikit-learn preprocessing and prediction pipeline with a Flask interface, server-side validation, and deployed score estimates from five categorical inputs.'),
para('AI PDF Summarizer  |  <link href="https://smartpdfsummarizer.streamlit.app" color="#31549a">Live demo</link>  ·  <link href="https://github.com/raviraj12b/pdf_summarizer" color="#31549a">Code</link>','project'),
para('Streamlit application for Groq-powered PDF summarization with multiple summary styles and PDF/TXT export.'),
heading('SKILLS'),
para('<b>Programming &amp; data:</b> Python, SQL, Pandas, NumPy, Scikit-learn, Matplotlib, data cleaning, feature engineering, model evaluation'),
para('<b>AI &amp; applications:</b> Retrieval-augmented generation, FAISS, LangChain, Groq, FastAPI, Flask, Streamlit, React.js, Git/GitHub'),
heading('EDUCATION'),
para('<b>B.E., Artificial Intelligence &amp; Data Science</b> · Expected May 2027<br/>Shree Ramchandra College of Engineering (SRCOE), Savitribai Phule Pune University, Pune')]
doc.build(story)
print(out, out.stat().st_size)
