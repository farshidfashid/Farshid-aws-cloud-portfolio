output "asg_name" {
  value = aws_autoscaling_group.asg.name
}

output "ec2_security_group_id" {
  value = aws_security_group.ec2_sg.id
}