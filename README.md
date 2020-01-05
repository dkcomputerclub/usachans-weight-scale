# usachans-weight-scale
IoT体重計

## 準備
AWSアカウント
Rasberry Pi 1台  
重さセンサー HX711 4個  
はんだごて  

## セットアップ(Macの場合)
### boto3有効化
  - boto3 install  
  %pip install boto3
  - awsコマンド install  
  %curl “https://bootstrap.pypa.io/get-pip.py” -o “get-pip.py”
  %sudo python get-pip.py
  %sudo pip install awscli
  %aws --version
  - aws configure設定  
  %aws confiqure  
  AWS Access Key ID [None]: ****直接教えます    
  AWS Secret Access Key [None]: ****直接教えます   
  Default region name [None]: ap-northeast-1  
  Default output format [None]: json  
  
### DynamoDB作成
AWS→DynamoDB→プライマリキー:id