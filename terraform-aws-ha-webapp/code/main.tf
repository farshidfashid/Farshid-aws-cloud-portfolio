module "vpc" {
  source = "./modules/vpc"
}

module "alb" {
  source = "./modules/alb"

  vpc_id         = module.vpc.vpc_id
  public_subnets = module.vpc.public_subnet_ids
}

module "autoscaling" {
  source = "./modules/autoscaling"

  vpc_id            = module.vpc.vpc_id
  public_subnet_ids = module.vpc.public_subnet_ids
  target_group_arn  = module.alb.target_group_arn
  alb_sg_id         = module.alb.alb_sg_id

  ami_id        = var.ami_id
  instance_type = var.instance_type
  key_name      = var.key_name
  my_ip         = var.my_ip
}