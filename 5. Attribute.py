class Cal ( object ):
	def __init__ ( self, v ):
		self.__value = v			# intance������ �տ� ����� 2�� ( __ )�� ���̸� �ܺο��� ���� �Ұ���
	def show ( self ):
		print( self.__value )

c1 = Cal( 10 )
#print( c1.__value )
#c1.value = 20
#print( c1.__value )
c1.show()
								# ruby instance �� �ܺο��� ���� ������ ���ִ� ��ɾ�
								# attr_reader :value		: �б� ����
								# attr_writer :value		: ���� ����
								# attr_accessor :value	: �� �� ���� ( �� ���� ��� �� �� �� ���� ���� ���� )