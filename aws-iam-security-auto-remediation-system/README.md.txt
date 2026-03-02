# Real-Time IAM Security Auto-Remediation System

## 📌 Project Summary
Built an automated security monitoring and remediation system that detects newly created IAM access keys and disables them instantly to prevent potential misuse.

## 🏗 Architecture Overview
- AWS CloudTrail logs API activity
- Amazon EventBridge detects access key creation events
- AWS Lambda disables unauthorized keys
- Amazon SNS sends real-time alerts
- CloudWatch Logs for auditing

## 🚀 Key Features
- Event-driven security automation
- Immediate key deactivation
- Real-time administrative notifications
- Full audit logging

## 🛠 Technologies Used
AWS CloudTrail  
Amazon EventBridge  
AWS Lambda  
Amazon SNS  
CloudWatch Logs  

## 📚 Key Learning Outcomes
- Implementing automated security controls
- Event-driven architecture in production scenarios
- Designing preventive cloud security systems

## 🔐 Security Considerations
- Least privilege Lambda execution role
- Controlled SNS topic permissions
- Audit trail maintained via CloudTrail

## 📈 Future Improvements
- Integrate Security Hub
- Add automated incident ticket creation
